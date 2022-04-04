import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { NotesList } from 'pages/NotesList';
import { Stats } from 'pages/Stats';
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
        }>
          <Route path="notes" element={<NotesList />} />
          <Route index element={<Stats />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
