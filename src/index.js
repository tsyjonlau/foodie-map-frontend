import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import 'dotenv/config';

import App from './components/App';
import Bookmarks from './components/Bookmarks';
import Map from './components/Map';
import rootReducer from './reducers';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to='/' replace />
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
]);

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);