import type { Hero, Publisher } from '../../types/types';
import { heroes } from '../data/heroes';

export const getDataByPublisher = (publisher: Publisher): Hero[] => {
  const validPublishers: Publisher[] = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" is not valid`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
