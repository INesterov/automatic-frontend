import React from 'react';
import { useMutation } from '@apollo/client';
import { useSearchParams, Navigate, useLocation } from 'react-router-dom';
import { ConfirmEmail, ConfirmEmailVariables } from 'gql/types';
import { confirmEmailMutation } from 'gql/mutations/confirmEmailMutation.graphql';
import { H1, Button } from 'uikit';
import {
  Container,
  ButtonsWrap
} from './styled';

export const EmailConfirm = (): JSX.Element => {
  const [searchParam] = useSearchParams();
  const token = searchParam.get('token');
  const [confirmEmail] = useMutation<ConfirmEmail, ConfirmEmailVariables>(confirmEmailMutation);
  const location = useLocation();

  React.useEffect(() => {
    if (token) {
      confirmEmail({ variables: { token }});
    }
  }, [confirmEmail, token]);

  const redirect = React.useCallback(() => {
    localStorage.removeItem('stampTokens');
    window.location.href = '/';
  }, []);

  return !token ? (
    <Navigate to="/need-email-confirm" state={{ from: location }} replace />
  ) : (
    <Container>
      <H1 style={{ marginTop: '30%'}}>Почта подтверждена!</H1>
      <ButtonsWrap>
        <Button onClick={redirect}>
          Вернуться
        </Button>
      </ButtonsWrap>
    </Container>
  );
};
