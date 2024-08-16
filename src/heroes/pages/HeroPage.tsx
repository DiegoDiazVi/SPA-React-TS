import {
  Navigate,
  type NavigateFunction,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getHeroById } from '../utils/getHeroById';

export const HeroPage = (): JSX.Element => {
  const { id } = useParams();
  const hero = getHeroById(id ?? '');
  const navigate: NavigateFunction = useNavigate();
  const publisherPath = hero?.publisher.split(' ')[0].toLowerCase();

  if (!hero) {
    return <Navigate to={'/*'} />;
  }

  const handleClickReturn = () => {
    navigate(`/${publisherPath}`);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../../../assets/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={handleClickReturn}>
          Back
        </button>
      </div>
    </div>
  );
};
