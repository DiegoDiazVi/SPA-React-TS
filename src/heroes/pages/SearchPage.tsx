import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const SearchPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { formState, onInputChange, onResetForm } = useForm({
    searchText: '',
  });

  const handleSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { searchText } = formState;
    if (searchText.trim().length === 0) return;
    onResetForm();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
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

          <div className="alert alert-primary">Search a hero...</div>
          <div className="alert alert-danger">There is not result</div>
        </div>
      </div>
    </>
  );
};
