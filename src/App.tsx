import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat
} from '@apollo/client';
import { Provider } from 'react-redux';
import { AuthProvider } from 'context/auth';
import { store } from 'store';
import { getTokens } from './pages/Auth/helpers/tokens';
import { GlobalStyle } from './styles';
import { Router } from './routes';

const httpLink = new HttpLink({ uri: 'http://185.137.234.69:3000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  const tokens = getTokens();
  if (tokens && tokens.accessToken) {
    operation.setContext({
      headers: {
        'x-access-token': tokens.accessToken,
        'x-refresh-token': tokens.refreshToken
      }
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Provider store={store}>
          <GlobalStyle />
          <Router />
        </Provider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
