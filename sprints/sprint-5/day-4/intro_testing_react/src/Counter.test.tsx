import { describe, expect, it } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import { Counter } from './Counter';

describe.skip('counter', () => {
  it('should render the  component', () => {
    const { getByText } = render(<Counter />);
    // const text = screen.getByText(/Counter/i);
    const text2 = getByText(/Counter/i);
    // expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it('should render the  increase button', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increase/i });
    expect(button).toBeInTheDocument();
  });
  it('should render the  decrease button', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /decrease/i });
    expect(button).toBeInTheDocument();
  });

  it('should render the  counter value', () => {
    render(<Counter />);

    // const value = screen.getByTestId('counter-value');
    const value = screen.getByText('0');

    expect(value).toBeInTheDocument();

  });


  it('should increase the counter value', () => {
    render(<Counter />);
    const increaseButton = screen.getByRole('button', { name: /increase/i });
    fireEvent.click(increaseButton);
    // const value = screen.getByText('0');
    const value = screen.getByTestId('counter-value');
    expect(value).toHaveTextContent('1');
  });
  it('should decrease the counter value', () => {
    render(<Counter />);
    const value = screen.getByTestId('counter-value');
    const increaseButton = screen.getByRole('button', { name: /increase/i });
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    const decreaseButton = screen.getByRole('button', { name: /decrease/i });
    fireEvent.click(decreaseButton);

    expect(value).toHaveTextContent('2');
  });

});
