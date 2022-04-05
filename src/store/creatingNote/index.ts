import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CreatingNoteState = {
  situation: string;
  emotion: string;
  bodilySensations: string;
  automaticThought: string;
  behavior: string;
  senses: string;
}

const initialState: CreatingNoteState = {
  situation: '',
  emotion: '',
  bodilySensations: '',
  automaticThought: '',
  behavior: '',
  senses: ''
};

type Payload = {
  name: 'situation' | 'emotion' | 'bodilySensations' | 'automaticThought' | 'behavior' | 'senses';
  value: string;
}

export const creatingNoteSlice = createSlice({
  name: 'creatingNote',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<Payload>) => {
      state[action.payload.name] = action.payload.value;
    },
    reset: state => {
      state = initialState;
    }
  }
});

export const { setValue, reset } = creatingNoteSlice.actions;
