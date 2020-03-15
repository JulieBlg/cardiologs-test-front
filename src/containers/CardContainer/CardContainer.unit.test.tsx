import React from 'react';
import { render } from '@testing-library/react';

import CardContainer from './CardContainer';

const mockCards = [
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
        "status": "PENDING"
    },
    {
        "arrhythmias": [
            "AFib",
            "Pause"
        ],
        "created_date": "2019-12-31T00:11:14+0000",
        "id": 2,
        "patient_name": "Elsa",
        "status": "PENDING"
    },
];

describe('CardContainer', () => {
  it('should render CardContainer properly', () => {
    const { container } = render(<CardContainer status="PENDING" cards={mockCards} handleClick={jest.fn()}/>);

    expect(container).toMatchSnapshot();
  });
})

