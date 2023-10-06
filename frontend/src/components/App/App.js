import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
