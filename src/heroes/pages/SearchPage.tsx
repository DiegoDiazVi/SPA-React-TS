import { HeroCard } from '../components/HeroCard';
import { useSearch } from '../hooks/useSearch';

export const SearchPage = (): JSX.Element => {
  const {
    searchText,
    handleSearchSubmit,
    onInputChange,
    showError,
    showSearch,
    heroes,
  } = useSearch();
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
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {showSearch && (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}
          {showError && (
            <div className="alert alert-danger animate__animated animate__fadeInUp">
              There is not result
            </div>
          )}

          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
