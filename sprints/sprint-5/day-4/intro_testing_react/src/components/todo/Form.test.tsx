import { it, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
  it('should change the value on input', () => {
    render(<Form />);
    const input = screen.queryByPlaceholderText('insert your task');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
  });
});
