import { Login_login } from 'gql/types';

const TOKEN_KEY = 'stampTokens';

export function saveTokens(tokens: Login_login) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
}

export function getTokens(): Login_login {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) as string);
}

export function deleteTokens() {
  localStorage.removeItem(TOKEN_KEY);
}