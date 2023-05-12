import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const appMainDiv = screen.getByTestId("app-main");
  expect(appMainDiv).toBeInTheDocument();
});
