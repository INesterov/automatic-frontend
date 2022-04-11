import { gql } from '@apollo/client';

export const noteQuery = gql`
  query Note($id: Int!) {
    note(id: $id) {
      emotion
      situation
      senses
      anxietyLevel
      automaticThought
      behavior
      bodilySensations
      createdAt
    }
  }
`;
