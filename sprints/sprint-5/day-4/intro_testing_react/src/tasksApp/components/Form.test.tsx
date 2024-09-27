import { it, expect, describe, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
  it('should render the form', () => {
    const onSubmit = vi.fn();
    const { getByLabelText, getByRole } = render(<Form onSubmit={onSubmit} />);

    const input = getByLabelText('insert your task');
    const button = getByRole('button');

    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('should change the value on input', () => {
    const onSubmit = vi.fn();
    render(<Form onSubmit={onSubmit} />);
    const input = screen.queryByPlaceholderText('insert your task');
    if (!input) {
      throw new Error('Input not found');
    }
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
  });

  it('should call the onSubmit function', () => {
    const onSubmit = vi.fn();
    render(<Form onSubmit={onSubmit} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalled();
  });
});
