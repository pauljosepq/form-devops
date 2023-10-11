import {Navigate, Outlet} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';

const ProtectedRoute = () => {
    useEffect(() => {
        const interval = setInterval(async () => {
            const access_token = getAccessToken();
            if (!access_token) {
                window.location.href = '/login';
                return;
            }

            if (isTokenExpired()) {
                localStorage.removeItem('token');
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    return isAuthenticated() ? <Outlet/> : <Navigate to='/login'/>;
};

const getAccessToken = () => {
  return localStorage.getItem('token');
};

export const isAuthenticated = () => {
  const accessToken = getAccessToken();
  return !(!accessToken || isTokenExpired());
};

export const isTokenExpired = () => {
  const accessToken = getAccessToken();
  const decodedAccessToken = jwtDecode(accessToken);
  const expirationTime = decodedAccessToken.exp;
  const now = Math.floor(Date.now() / 1000);
  const timeToExpiry = expirationTime - now;
  return timeToExpiry < 0;
}

export default ProtectedRoute;
