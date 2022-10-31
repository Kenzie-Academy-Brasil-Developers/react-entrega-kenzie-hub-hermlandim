import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return null;
  }
  return <>{user ? <Outlet /> : <Navigate to='/login' replace />}</>;
};

export default ProtectedRoutes;
