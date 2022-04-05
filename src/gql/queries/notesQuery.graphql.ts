import { gql } from '@apollo/client';

export const notesQuery = gql`
  query Notes {
    notes {
      situation
      createdAt
      id
    }
  }
`;
