import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

interface PrivateRoutesProps {
  children: React.ReactNode;
}

export const PrivateRoutes = ({
  children,
}: PrivateRoutesProps): JSX.Element => {
  const {
    authState: { logged },
  } = useContext(AuthContext);
  return logged ? <>{children}</> : <Navigate to={'/login'} />;
};
