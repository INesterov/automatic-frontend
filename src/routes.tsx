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
import { CreatingNote } from 'pages/CreatingNote';
import { Note } from 'pages/Note';
import { RemoveNote } from 'pages/RemoveNote';
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
          <Route path="notes" element={
            <RequireAuth>
              <NotesList />
            </RequireAuth>
          } />
          <Route index element={<Stats />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/create/:step" element={
          <RequireAuth>
            <CreatingNote />
          </RequireAuth>
        } />
        <Route path="/note/:id" element={
          <RequireAuth>
            <Note />
          </RequireAuth>
        } />
        <Route path="/note/:id/remove" element={
          <RequireAuth>
            <RemoveNote />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
};
