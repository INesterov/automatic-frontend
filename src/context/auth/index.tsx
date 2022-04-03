import React from 'react';
import { User } from 'types/user';

type AuthContextType = {
  user: User | null;
  signin: (user: User, callback: () => void) => void;
  signout: (callback: () => void) => void;
};

export const AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const signin = (newUser: User, callback: () => void) => {
    setUser(newUser);
    callback();
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
