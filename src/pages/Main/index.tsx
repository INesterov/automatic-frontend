import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Introspect, IntrospectVariables } from 'gql/types';
import { introspectQuery } from 'gql/queries/introspect.graphql';
import { getTokens, deleteTokens, saveTokens } from 'pages/Auth/helpers/tokens';
import { Menu } from './components/Menu';
import {
  Container,
  Content
} from './styled';

export const Main = (): JSX.Element => {
  const tokens = getTokens();

  const { data } = useQuery<Introspect, IntrospectVariables>(introspectQuery, {
    variables: {
      tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken
      }
    }
  });

  React.useEffect(() => {
    const accessToken = data?.introspect?.accessToken;
    const refreshToken = data?.introspect?.refreshToken;

    if (accessToken && refreshToken) {
      saveTokens({ accessToken, refreshToken });
    }

    if (accessToken === 'error' || refreshToken === 'error') {
      deleteTokens();
    }
  }, [data]);

  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
      <Menu />
    </Container>
  );
};
