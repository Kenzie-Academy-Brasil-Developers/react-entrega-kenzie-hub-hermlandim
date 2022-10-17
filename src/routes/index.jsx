import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import LandingPage from '../pages/Landing/landing';
import LoginPage from '../pages/Login';
import Register from '../pages/Register';
import RegisterTech from '../pages/RegisterTech';

const RoutesMain = () => {
  const [user, setUser] = useState({});
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage setUser={setUser} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard user={user} />}>
        <Route
          path='/dashboard/registerTechnologies'
          element={<RegisterTech />}
        />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
