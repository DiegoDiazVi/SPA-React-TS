import type { Hero, Publisher } from '../../types/types';
import { getDataByPublisher } from '../utils/getHeroesByPublisher';

interface HeroListProps {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: HeroListProps): JSX.Element => {
  const heroes: Hero[] = getDataByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};
