import React from 'react';
import { Route, Routes } from 'react-router';
import { DcScreen } from '../dc/DcScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { HeroScreen } from '../hero/HeroScreen';

import NavBar from '../ui/NavBar';

const DashboardRoutes = () => {
  return(
      <>
      <NavBar/>
      <Routes>
      <Route path="/" element={<DcScreen/>} />
      <Route path="marvel" element={<MarvelScreen />} />
      <Route path="dc" element={<DcScreen />} />
      <Route path="hero/:heroId" element={<HeroScreen />} />
    </Routes>
    </>
  );
};

export default DashboardRoutes;
