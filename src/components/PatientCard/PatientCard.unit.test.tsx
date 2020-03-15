import React from 'react';
import { render } from '@testing-library/react';
import PatientCard from './PatientCard';

const mockCard = [
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
        "AFib",
        "Pause"
        ],
        "created_date": "2019-12-31T00:11:14+0000",
        "id": 2,
        "patient_name": "Elsa",
        "status": "DONE"
    }
];

describe('PatientCard', () => {
  it('should render PatientCard properly with the status pending', () => {
    const { getByText } = render(<PatientCard card={mockCard[0]} status={'PENDING'} handleClick={jest.fn()}/>);

    expect(getByText('Bob')).toBeInTheDocument();
    expect(getByText('Patient ID : 0')).toBeInTheDocument();
    expect(getByText('Move Card To')).toBeInTheDocument();

    const arrhythmias = mockCard[0].arrhythmias;

    for(let i=0; i<arrhythmias.length; i++){
        expect(getByText(arrhythmias[i])).toBeInTheDocument();
    }
  });

  it('should render PatientCard properly with the status done', () => {
    const { getByText } = render(<PatientCard card={mockCard[1]} status={'DONE'} handleClick={jest.fn()}/>);

    expect(getByText('Elsa')).toBeInTheDocument();
    expect(getByText('Patient ID : 2')).toBeInTheDocument();
    expect(getByText('Move Card To')).toBeInTheDocument();

    const arrhythmias = mockCard[1].arrhythmias;

    for(let i=0; i<arrhythmias.length; i++){
        expect(getByText(arrhythmias[i])).toBeInTheDocument();
    }
  });
})

