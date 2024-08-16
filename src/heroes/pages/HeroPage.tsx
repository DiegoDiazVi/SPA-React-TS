import { useMemo } from 'react';
import {
  Navigate,
  type NavigateFunction,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getHeroById } from '../utils/getHeroById';

export const HeroPage = (): JSX.Element => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id ?? ''), [id]);
  const navigate: NavigateFunction = useNavigate();
  const publisherPath = hero?.publisher.split(' ')[0].toLowerCase();

  if (!hero) {
    return <Navigate to={'/*'} />;
  }

  const handleClickReturn = () => {
    navigate(`/${publisherPath}`);
  };

  return (
    <section className="container mt-5">
      <article className="row">
        <figure className="col-md-4">
          <img
            src={`../../../assets/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
          <figcaption className="visually-hidden">
            Image of {hero.superhero}
          </figcaption>
        </figure>
        <article className="col-md-8">
          <header>
            <h3>{hero.superhero}</h3>
          </header>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Alter ego:</strong> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <strong>Publisher:</strong> {hero.publisher}
            </li>
            <li className="list-group-item">
              <strong>Appearance:</strong> {hero.first_appearance}
            </li>
          </ul>
          <section className="mt-3">
            <h5>Characters</h5>
            <p>{hero.characters}</p>
          </section>
          <button
            className="btn btn-outline-primary"
            onClick={handleClickReturn}
          >
            Back
          </button>
        </article>
      </article>
    </section>
  );
};
