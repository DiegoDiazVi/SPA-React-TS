import type { Hero } from '../../types/types';

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = ({ hero }: HeroCardProps): JSX.Element => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = `../../../assets/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutter">
          <figure className="col-4">
            <img src={imagePath} alt={superhero} className="card-img" />
          </figure>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}
              <p className="card-tex">
                <small className="text-muted">{first_appearance}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
