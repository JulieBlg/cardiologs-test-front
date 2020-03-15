import React from 'react';
import { render, getAllByTestId, getByText, fireEvent } from '@testing-library/react';

import CardTriagePage from './CardTriagePage';
import * as services from '../../services/cardsServices';

describe('CardTriagePage', () => {
  let getCardsSpy: jest.SpyInstance;
  let updateCardsSpy: jest.SpyInstance;
  let searchCardSpy: jest.SpyInstance;

  beforeAll(() => {
    getCardsSpy = jest
      .spyOn(services, 'getCards')
      .mockResolvedValue([
        {
            "arrhythmias": [
              "AFib",
              "AV Block",
              "Pause",
              "PSVC",
              "PVC"
            ],
            "created_date": "2020-03-10T13:14:59+0000",
            "id": 0,
            "patient_name": "Bob",
            "status": "PENDING"
          },
          {
            "arrhythmias": [
              "Pause"
            ],
            "created_date": "2020-01-01T00:12:21+0000",
            "id": 1,
            "patient_name": "Bill",
            "status": "COMPLETED"
          },
          {
            "arrhythmias": [
              "AFib",
              "Pause"
            ],
            "created_date": "2019-12-31T00:11:14+0000",
            "id": 2,
            "patient_name": "Elsa",
            "status": "DONE"
          },
      ]);

      updateCardsSpy = jest.spyOn(services, 'updateCardStatus');

      searchCardSpy = jest.spyOn(services, 'searchCards');
  });

  it('should render CardTriagePage properly', async () => {
    const { container, findByText } = render(<CardTriagePage />);

    expect(getCardsSpy).toHaveBeenCalled();

    await findByText('Patient ID : 0');

    expect(container).toMatchSnapshot();
  });

  it('should move card to another column', async () => {
    const { container, findByText, findAllByTestId } = render(<CardTriagePage />);

    expect(getCardsSpy).toHaveBeenCalled();

    await findByText('Patient ID : 0');

    const firstColumn = getAllByTestId(container, 'cardContainer')[0];
    var firstColumnCards = getAllByTestId(firstColumn, 'patientCard');
    expect(firstColumnCards).toHaveLength(1);

    const secondColumn = getAllByTestId(container, 'cardContainer')[1];
    var secondColumnCards = getAllByTestId(secondColumn, 'patientCard');
    expect(secondColumnCards).toHaveLength(1);

    const movingCardButton = getByText(firstColumnCards[0], 'Move Card To');
    movingCardButton.click();

    const options = await findAllByTestId('menuOption');
    options[0].click();

    expect(updateCardsSpy).toHaveBeenCalledWith(
      {
         "card":  {
           "arrhythmias":  [
             "AFib",
             "AV Block",
             "Pause",
             "PSVC",
             "PVC",
           ],
           "created_date": "2020-03-10T13:14:59+0000",
           "id": 0,
           "patient_name": "Bob",
           "status": "PENDING",
         },
         "status": "COMPLETED",
    });
  });

  it('should filter cards', () => {
    const { getByLabelText } = render(<CardTriagePage />);

    const input = getByLabelText('Filter');
    fireEvent.change(input, { target: { value: 'Pause'}});

    expect(searchCardSpy).toHaveBeenCalledWith('Pause');
  });
})

