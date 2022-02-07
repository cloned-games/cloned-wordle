import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cloned Wordle header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cloned Wordle/i);
  expect(linkElement).toBeInTheDocument();
});
