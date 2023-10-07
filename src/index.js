import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import 'dotenv/config';

import routesConfig from './routesConfig';
import rootReducer from './reducers';

import './index.css';

const router = createBrowserRouter(routesConfig);

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