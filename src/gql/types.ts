

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
}

//==============================================================
// END Enums and Input Objects
//==============================================================