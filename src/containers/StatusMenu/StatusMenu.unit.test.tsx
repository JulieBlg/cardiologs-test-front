import React from 'react';
import { render } from '@testing-library/react';

import StatusMenu from './StatusMenu';

const mockOptions = [
    <p>Option 1</p>,
    <p>Option 2</p>
];

describe('StatusMenu', () => {
  it('should render StatusMenu properly', async () => {
    const { getByText } = render(<StatusMenu options={mockOptions} />);

    expect(getByText('Move')).toBeInTheDocument();
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
  });
})

