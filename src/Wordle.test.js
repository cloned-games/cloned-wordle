import React from 'react';
import { render, screen } from '@testing-library/react';
import Wordle from './Wordle';

test('renders Cloned Wordle header', () => {
  render(<Wordle />);
  const linkElement = screen.getByText(/Cloned Wordle/i);
  expect(linkElement).toBeInTheDocument();
});
