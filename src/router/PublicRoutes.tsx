import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

interface PublicRoutesProps {
  children: React.ReactNode;
}

export const PublicRoutes = ({ children }: PublicRoutesProps): JSX.Element => {
  const {
    authState: { logged },
  } = useContext(AuthContext);
  return !logged ? <>{children}</> : <Navigate to={'/marvel'} />;
};
