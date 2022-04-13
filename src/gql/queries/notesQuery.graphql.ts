import { gql } from '@apollo/client';

export const notesQuery = gql`
  query Notes($searchText: String!) {
    notes(searchText: $searchText) {
      situation
      createdAt
      id
    }
  }
`;
