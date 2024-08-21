import { Hero } from '../../types/types';
import { heroes } from '../data/heroes';

export const getHeroByName = (name: string): Hero[] | undefined => {
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
