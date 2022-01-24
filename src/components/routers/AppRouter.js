import React from 'react';
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import {LoginScreen } from '../login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
  
const AppRouter = () => {
  return (
    <BrowserRouter>

    <div className="App">

      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoutes/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default AppRouter

