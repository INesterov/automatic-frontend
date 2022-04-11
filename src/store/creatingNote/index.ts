import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CreatingNoteState = {
  situation: string;
  emotion: string;
  bodilySensations: string;
  automaticThought: string;
  behavior: string;
  senses: string;
  anxietyLevel: number;

}

const initialState: CreatingNoteState = {
  situation: '',
  emotion: '',
  bodilySensations: '',
  automaticThought: '',
  behavior: '',
  senses: '',
  anxietyLevel: 0
};

type Payload = {
  name: 'situation' | 'emotion' | 'bodilySensations' | 'automaticThought' | 'behavior' | 'senses' | 'anxietyLevel';
  value: never;
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
