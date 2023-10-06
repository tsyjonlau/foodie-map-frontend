import React from 'react';
import { act, render, screen } from '@testing-library/react';

import App from './App';

beforeEach(() => {
  fetchMock.mockIf('http://localhost:8000', req => {
      if (req.url.endsWith('/api/sample')) {
        return [];
      } else {
        return {
          status: 404,
          body: 'Not Found'
        }
      }
  })
});

test('renders learn react link', async () => {
  act(() => {
    render(<App />);
  });

  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
