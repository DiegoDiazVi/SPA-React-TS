import { createContext, useEffect, useReducer } from 'react';
import type {
  AuthContextType,
  AuthProviderProps,
  AuthState,
} from '../../types/types';
import { typesReducer } from '../constants/constants';
import { authReducer } from './authReducer';

const initialAuthState: AuthState = {
  logged: false,
  name: '',
};

export const AuthContext = createContext<AuthContextType>({
  authState: initialAuthState,
  onLogin: () => {},
  onLogout: () => {},
});

const init = (): AuthState => {
  const user = localStorage.getItem('user');
  if (user) return JSON.parse(user);
  return initialAuthState;
};

export const AuthProviver = ({ children }: AuthProviderProps): JSX.Element => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(authState));
  }, [authState]);

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
