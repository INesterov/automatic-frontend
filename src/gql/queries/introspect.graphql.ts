import { gql } from '@apollo/client';

export const introspectQuery = gql`
  query Introspect($tokens: TokensGQL!) {
    introspect(tokens: $tokens) {
      accessToken
      refreshToken
    }
  }
`;
