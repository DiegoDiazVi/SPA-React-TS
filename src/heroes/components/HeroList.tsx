import { memo, useMemo } from 'react';
import type { Hero, Publisher } from '../../types/types';
import { getDataByPublisher } from '../utils/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

interface HeroListProps {
  publisher: Publisher;
}

export const HeroList = memo(({ publisher }: HeroListProps): JSX.Element => {
  const heroes: Hero[] = useMemo(
    () => getDataByPublisher(publisher),
    [publisher]
  );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
});
