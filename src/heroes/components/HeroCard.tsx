import { Link } from 'react-router-dom';
import type { Hero } from '../../types/types';

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = ({ hero }: HeroCardProps): JSX.Element => {
  const { id, superhero, alter_ego, first_appearance, characters } = hero;

  const imagePath = `../../../assets/${id}.jpg`;

  return (
    <article
      className="col animate__animated animate__bounceInLeft"
      aria-label={`Card for ${superhero}`}
    >
      <section className="card">
        <div className="row no-gutters ">
          <figure className="col-4" role="img">
            <img
              src={imagePath}
              alt={`Image of ${superhero}, also known as ${alter_ego}`}
              className="card-img"
            />
          </figure>

          <section className="col-8">
            <section className="card-body">
              <h3 className="card-title">{superhero}</h3>
              <p className="card-text" aria-label={`Alter ego: ${alter_ego}`}>
                {alter_ego}
              </p>
              {alter_ego !== characters && (
                <p
                  className="card-text"
                  aria-label={`Other characters: ${characters}`}
                >
                  {characters}
                </p>
              )}
              <p className="card-text">
                <small className="text-muted">
                  First appearance: {first_appearance}
                </small>
              </p>
              <Link to={`/hero/${id}`} className="btn btn-primary">
                More Info
              </Link>
            </section>
          </section>
        </div>
      </section>
    </article>
  );
};
