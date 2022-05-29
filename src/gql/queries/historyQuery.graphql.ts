import { gql } from '@apollo/client';

export const historyQuery = gql`
  query History {
    history {
      message
      link
      createdAt
    }
  }
`;
