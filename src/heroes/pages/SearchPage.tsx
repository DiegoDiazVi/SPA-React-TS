export const SearchPage = (): JSX.Element => {
  return (
    <>
      <h2 className="mt-5">Search page</h2>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
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
