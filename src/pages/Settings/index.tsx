import React from 'react';
import { useNavigate } from 'react-router-dom';
import { H1, Button } from 'uikit';
import { useAuth } from 'context/auth';
import { deleteTokens } from 'pages/Auth/helpers/tokens';
import {
  Container,
  Header,
  Content
} from './styled';

export const Settings = (): JSX.Element => {
  const navigate = useNavigate();
  const auth = useAuth();
  const logout = React.useCallback(() => {
    deleteTokens();

    auth.signout(() => null);

    navigate('/');
  }, [navigate, auth]);

  return (
    <Container>
      <Header>
        <H1>Настройки</H1>
      </Header>
      <Content>
        <Button onClick={logout}>
          Выход
        </Button>
      </Content>
    </Container>
  );
};
