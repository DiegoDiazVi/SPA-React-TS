import { createContext, useReducer } from 'react';
import type {
  AuthContextType,
  AuthProviderProps,
  AuthState,
} from '../../types/types';
import { authReducer } from './authReducer';

export const AuthContext = createContext<AuthContextType | null>(null);

const initialAuthState: AuthState = {
  logged: false,
  name: '',
};

export const AuthProviver = ({ children }: AuthProviderProps): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
