

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmEmail
// ====================================================

export interface ConfirmEmail_confirmEmail {
  email: string;
  id: number;
}

export interface ConfirmEmail {
  confirmEmail: ConfirmEmail_confirmEmail;
}

export interface ConfirmEmailVariables {
  token: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateNote
// ====================================================

export interface CreateNote_createNote {
  id: number;
}

export interface CreateNote {
  createNote: CreateNote_createNote;
}

export interface CreateNoteVariables {
  note: CreateNoteGQL;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  accessToken: string;
  refreshToken: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveNote
// ====================================================

export interface RemoveNote {
  removeNote: string;
}

export interface RemoveNoteVariables {
  id: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Note
// ====================================================

export interface Note_note {
  emotion: string;
  situation: string;
  senses: string;
  anxietyLevel: number;
  automaticThought: string;
  behavior: string;
  bodilySensations: string;
  createdAt: any;
}

export interface Note {
  note: Note_note;
}

export interface NoteVariables {
  id: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NotesByDay
// ====================================================

export interface NotesByDay_notesByDay {
  situation: string;
  createdAt: any;
  id: number;
}

export interface NotesByDay {
  notesByDay: NotesByDay_notesByDay[];
}

export interface NotesByDayVariables {
  time: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Notes
// ====================================================

export interface Notes_notes {
  situation: string;
  createdAt: any;
  id: number;
}

export interface Notes {
  notes: Notes_notes[];
}

export interface NotesVariables {
  searchText: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// null
export interface CreateNoteGQL {
  situation: string;
  emotion: string;
  senses: string;
  bodilySensations: string;
  automaticThought: string;
  behavior: string;
  anxietyLevel: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================