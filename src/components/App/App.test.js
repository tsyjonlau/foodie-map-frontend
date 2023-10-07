import { act, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import React from 'react';
import {
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';

import routesConfig from '../../routesConfig';

test('first render', async () => {
  const router = createMemoryRouter(routesConfig);

  act(() => {
    render(<RouterProvider router={router} />);
  });

  const titleElements = await screen.findAllByText('Foodie Map');
  expect(titleElements.length).toEqual(2);
  titleElements.forEach(element => expect(element).toBeInTheDocument());
});

// test('clicking on map tab', async () => {
//   const router = createMemoryRouter(routesConfig);
//   const user = userEvent.setup();

//   render(<RouterProvider router={router} />);

//   const mapElements = screen.getAllByText('Map');
//   await user.click(mapElements.find(element => element.elementType === 'a'));
  
//   const mapElement = await screen.getByRole('region');
//   expect(mapElement).toBeInTheDocument();
// });
