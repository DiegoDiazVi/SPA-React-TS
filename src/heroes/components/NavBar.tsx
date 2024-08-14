import { Link, NavLink, type NavLinkRenderProps } from 'react-router-dom';

export const Navbar = (): JSX.Element => {
  const getNavLinkClass = ({ isActive }: NavLinkRenderProps): string => {
    return `nav-item nav-link ${isActive ? 'active' : ''} `;
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
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
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className={(data: NavLinkRenderProps) => getNavLinkClass(data)}
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
