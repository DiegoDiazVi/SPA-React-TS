import { type NavigateFunction, useNavigate } from 'react-router-dom';

export const LoginPage = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const handleClickLogin = (): void => {
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
