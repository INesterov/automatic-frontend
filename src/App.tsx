import React from 'react';
import { AuthProvider } from 'context/auth';
import { Router } from './routes';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
