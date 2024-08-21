import { Hero } from '../../types/types';
import { heroes } from '../data/heroes';

export const getHeroByName = (name: string): Hero[] | undefined => {
  if (name.trim().length === 0) return [];
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().trim().includes(name.toLowerCase().trim())
  );
};
