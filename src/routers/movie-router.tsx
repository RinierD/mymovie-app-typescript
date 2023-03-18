import React from 'react';
import { Route, Routes } from "react-router-dom";
import Detail from '../pages/Details';
import DowinnLogin from '../pages/dowinn-login';
import Home from '../pages/Home';

function MovieRoute() {
  return (
      <Routes>
          <Route path="/dowin" element={<DowinnLogin />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default MovieRoute;