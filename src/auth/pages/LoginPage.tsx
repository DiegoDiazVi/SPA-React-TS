import { useContext } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const onLogin = authContext?.onLogin || (() => {});
  const navigate: NavigateFunction = useNavigate();

  const handleClickLogin = (): void => {
    onLogin('Ronny');
    navigate('/', { replace: true });
  };

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>
      <hr />

      <button className="btn btn-primary" onClick={handleClickLogin}>
        Login
      </button>
    </div>
  );
};
