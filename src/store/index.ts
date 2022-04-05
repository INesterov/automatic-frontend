import { configureStore } from '@reduxjs/toolkit';
import { creatingNoteSlice } from './creatingNote';

export const store = configureStore({
  reducer: {
    creatingNote: creatingNoteSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
