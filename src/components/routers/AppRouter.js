import React from 'react';
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import {LoginScreen } from '../login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
  
const AppRouter = () => {
  return (
    <BrowserRouter>

    <div className="App">

      <Routes>
        <Route path="/login" element={<PublicRoute><LoginScreen /></PublicRoute>} />
        <Route path="/*" element={
        <PrivateRoute><DashboardRoutes/></PrivateRoute>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default AppRouter

