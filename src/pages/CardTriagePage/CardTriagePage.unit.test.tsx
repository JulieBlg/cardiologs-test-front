import React from 'react';
import { render } from '@testing-library/react';
import CardTriagePage from './CardTriagePage';

describe('CardTriagePage', () => {
  it('should render CardTriagePage properly', () => {
    const { container } = render(<CardTriagePage />);

    expect(container).toMatchSnapshot();
  });
})

