import React from 'react';
import jwt_decode from 'jwt-decode';
import { getTokens } from 'pages/Auth/helpers/tokens';
import { User } from 'types/user';

type AuthContextType = {
  user: User | null;
  signin: (user: User) => void;
  signout: (callback: () => void) => void;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const tokens = getTokens();
  let initState = null;

  if (tokens && tokens.accessToken) {
    const { user } = jwt_decode(tokens.accessToken) as { user: User};
    initState = user;
  }
  const [user, setUser] = React.useState<User | null>(initState);
  const signin = (newUser: User) => {
    setUser(newUser);
  };
  const signout = (callback: () => void) => {
    setUser(null);
    callback();
  };
  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
