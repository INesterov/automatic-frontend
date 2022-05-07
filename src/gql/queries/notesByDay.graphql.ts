import { gql } from '@apollo/client';

export const notesByDay = gql`
  query NotesByDay($time: Int!) {
    notesByDay(time: $time) {
      situation
      createdAt
      id
    }
  }
`;
