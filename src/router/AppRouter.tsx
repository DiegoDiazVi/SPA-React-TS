import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
