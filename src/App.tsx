import React from 'react';
import { AuthProvider } from 'context/auth';
import { GlobalStyle } from './styles';
import { Router } from './routes';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
}

export default App;
