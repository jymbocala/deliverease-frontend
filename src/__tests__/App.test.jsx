import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from '../App';
import "react-intersection-observer";

test('renders the App component without crashing', () => {
  render(<App />);
});

test("path is set to '/' when the App component is rendered", () => {
  render(<App />);
  expect(window.location.pathname).toBe('/');
});