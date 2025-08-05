import App from '../App';
import { render, screen } from '@testing-library/react';

test("renders 'app-main' div element", () => {
  render(<App />);
  const appMainDiv = screen.getByTestId("app-main");
  expect(appMainDiv).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});