import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroByName } from '../utils/getHeroresByName';

export const SearchPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const { formState, onInputChange, onResetForm } = useForm({
    searchText: '',
  });

  const heroes = getHeroByName(q as string);

  console.log(heroes);

  const handleSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { searchText } = formState;
    if (searchText.trim().length === 0) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    onResetForm();
  };

  return (
    <>
      <h2 className="mt-5">Search page</h2>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={formState.searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">There is not result</div>

          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
