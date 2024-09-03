import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { ErrorAlert } from '../../..'
 

describe('ErrorAlertComponent', () => {
  test('renders error alert component', () => {
    

    render(<ErrorAlert  />);
    
    // Check if the button is rendered with the correct text
    const wrapperElement = screen.getByTestId('components-alerts-error')
    expect(wrapperElement).toBeInTheDocument();
  });
});
