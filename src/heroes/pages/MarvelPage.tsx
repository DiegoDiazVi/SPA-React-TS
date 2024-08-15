import { HeroList } from '../components/HeroList';

export const MarvelPage = (): JSX.Element => {
  return (
    <>
      <h2 className="mt-5">MarvelPage</h2>
      <hr />

      <HeroList publisher={'Marvel Comics'} />
    </>
  );
};
