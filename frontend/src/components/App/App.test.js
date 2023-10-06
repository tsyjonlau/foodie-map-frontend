import React from 'react';
import { act, render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', async () => {
  act(() => {
    render(<App />);
  });

  const linkElement = await screen.findByText(/Foodie Map/i);
  expect(linkElement).toBeInTheDocument();
});
