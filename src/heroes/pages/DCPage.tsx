import { HeroList } from '../components/HeroList';

export const DCPage = (): JSX.Element => {
  return (
    <>
      <h2 className="mt-5">DC Page</h2>
      <hr />

      <HeroList publisher={'DC Comics'} />
    </>
  );
};
