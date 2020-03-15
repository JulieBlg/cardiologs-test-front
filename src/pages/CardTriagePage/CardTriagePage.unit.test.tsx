import React from 'react';
import { render } from '@testing-library/react';

import CardTriagePage from './CardTriagePage';
import * as services from '../../services/cardsServices';

describe('CardTriagePage', () => {
  let getCardsSpy: jest.SpyInstance;
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
      ])
  });

  it('should render CardTriagePage properly', () => {
    const { container } = render(<CardTriagePage />);

    expect(getCardsSpy).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
})

