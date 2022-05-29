import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { NotesList } from 'pages/NotesList';
import { NotesByDay } from 'pages/NotesList/NotesByDay';
import { Calendar } from 'pages/Calendar';
import { Main } from 'pages/Main';
import { Auth } from 'pages/Auth';
import { CreatingNote } from 'pages/CreatingNote';
import { Note } from 'pages/Note';
import { RemoveNote } from 'pages/RemoveNote';
import { NeedEmailConfirm } from 'pages/NeedEmailConfirm';
import { EmailConfirm } from 'pages/EmailConfirm';
import { Settings } from 'pages/Settings';
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
          <Route path="/notes" element={
            <RequireAuth>
              <NotesList />
            </RequireAuth>
          } />
          <Route path="/settings" element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          } />
          <Route path="/notes/:date" element={
            <RequireAuth>
              <NotesByDay />
            </RequireAuth>
          } />
          <Route index element={<Calendar />} />
        </Route>
        <Route path="/auth/:action" element={<Auth />} />
        <Route path="/need-email-confirm" element={<NeedEmailConfirm />} />
        <Route path="/confirm-email*" element={<EmailConfirm />} />
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
