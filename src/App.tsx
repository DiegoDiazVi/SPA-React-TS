import { AuthProviver } from './auth/context/AuthContext';
import { AppRouter } from './router/AppRouter';

function App(): JSX.Element {
  return (
    <AuthProviver>
      <AppRouter />
    </AuthProviver>
  );
}

export default App;
