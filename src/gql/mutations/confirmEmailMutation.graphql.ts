import {gql} from '@apollo/client';

export const confirmEmailMutation = gql`
  mutation ConfirmEmail($token: String!) {
    confirmEmail(token: $token) {
      email
      id
    }
  }
`;
