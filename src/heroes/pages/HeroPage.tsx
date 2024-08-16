import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../utils/getHeroById';

export const HeroPage = (): JSX.Element => {
  const { id } = useParams();
  const hero = getHeroById(id ?? '');

  if (!hero) {
    return <Navigate to={'/*'} />;
  }

  return (
    <>
      <div>Hero</div>
    </>
  );
};
