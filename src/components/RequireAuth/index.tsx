import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from 'context/auth';

export const RequireAuth = ({ children }: { children: JSX.Element }):JSX.Element => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
  }

  if (!auth.user.isEmailConfirmed) {
    return <Navigate to="/need-email-confirm" state={{ from: location }} replace />;
  }

  return children;
};
