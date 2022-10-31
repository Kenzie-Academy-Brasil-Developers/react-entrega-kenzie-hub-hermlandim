import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoutes from '../components/ProctectionRoutes';
import Dashboard from '../pages/Dashboard/dashboard';
import LandingPage from '../pages/Landing/landing';
import LoginPage from '../pages/Login';
import Register from '../pages/Register';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/register' element={<Register />} />
    <Route element={<ProtectedRoutes />}>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path=':register-tech' />
      </Route>
    </Route>
    <Route path='*' element={<Navigate to='/login' replace />} />
  </Routes>
);
export default RoutesMain;
