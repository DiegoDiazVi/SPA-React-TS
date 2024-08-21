import { AuthAction, AuthState } from '../../types/types';
import { typesReducer } from '../constants/constants';

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case typesReducer.login:
      return {
        ...state,
        logged: true,
        name: action.payload as string,
      };
    case typesReducer.logout:
      return {
        ...state,
        logged: false,
        name: '',
      };
    default:
      return state;
  }
};
