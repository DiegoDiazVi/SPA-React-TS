import {
  Link,
  NavLink,
  useNavigate,
  type NavLinkRenderProps,
  type NavigateFunction,
} from 'react-router-dom';

export const Navbar = (): JSX.Element => {
  /**
   * Navigates to a different route.
   */
  const navigate: NavigateFunction = useNavigate();

  /**
   * Returns the CSS class for a navigation link based on its active state.
   * @param {NavLinkRenderProps} props - The props for the navigation link.
   * @returns {string} The CSS class for the navigation link.
   */
  const getNavLinkClass = ({ isActive }: NavLinkRenderProps): string => {
    return `nav-item nav-link ${isActive ? 'active' : ''} `;
  };

  /**
   * Handles the logout action.
   */
  const handleLogout = (): void => {
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Heroes App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={(data: NavLinkRenderProps) => getNavLinkClass(data)}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={(data: NavLinkRenderProps) => getNavLinkClass(data)}
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={(data: NavLinkRenderProps) => getNavLinkClass(data)}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Diego</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
