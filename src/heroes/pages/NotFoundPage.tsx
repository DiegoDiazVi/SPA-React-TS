import { Link } from 'react-router-dom';
import NotFoundSVG from '../../../assets/404.svg';

const NotFoundPage = (): JSX.Element => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center">
      <img
        src={NotFoundSVG}
        alt="404 Not Found"
        className="img-fluid mb-4"
        style={{ maxWidth: '400px' }}
      />
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
