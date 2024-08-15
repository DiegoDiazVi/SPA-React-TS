import type { Hero, Publisher } from '../../types/types';
import { getDataByPublisher } from '../utils/getHeroesByPublisher';

export const HeroList = (publisher: Publisher): JSX.Element => {
  const heroes: Hero[] = getDataByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};
