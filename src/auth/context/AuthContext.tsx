import { createContext, useReducer } from 'react';
import type { AuthProviderProps } from '../../types/types';
import { authReducer } from './authReducer';

export const AuthContext = createContext<AuthContextType | null>(null);
const initialAuthState = {
  logged: false,
  name: '',
};
const [authState, dispatch] = useReducer(authReducer, initialAuthState);

export const AuthProviver = ({ children }: AuthProviderProps): JSX.Element => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
