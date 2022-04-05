import {gql} from '@apollo/client';

export const createNoteMutation = gql`
  mutation CreateNote ($note: CreateNoteGQL!) {
    createNote(note: $note) {
      id
    }
  }
`;
