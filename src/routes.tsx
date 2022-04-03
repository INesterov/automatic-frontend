import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Main } from 'pages/Main';
import { Auth } from 'pages/Auth';
import { RequireAuth } from 'components/RequireAuth';

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Main />
          </RequireAuth>
        } />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
