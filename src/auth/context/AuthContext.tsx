import { createContext, useReducer } from 'react';
import type {
  AuthContextType,
  AuthProviderProps,
  AuthState,
} from '../../types/types';
import { typesReducer } from '../constants/constants';
import { authReducer } from './authReducer';

export const AuthContext = createContext<AuthContextType | null>(null);

const initialAuthState: AuthState = {
  logged: false,
  name: '',
};

export const AuthProviver = ({ children }: AuthProviderProps): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const onLogin = (name: string): void => {
    dispatch({ type: typesReducer.login, payload: name });
  };

  const onLogout = (): void => {
    dispatch({ type: typesReducer.logout });
  };

  return (
    <AuthContext.Provider value={{ authState, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
