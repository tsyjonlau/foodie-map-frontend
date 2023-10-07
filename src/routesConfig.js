import React from 'react';

import App from './components/App';
import Bookmarks from './components/Bookmarks';
import Home from './components/Home';
import Map from './components/Map';

const routesConfig = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/map',
          element: <Map />,
        },
        {
          path: '/bookmarks',
          element: <Bookmarks />,
        },
      ],
    },
]

export default routesConfig;