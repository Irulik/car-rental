import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
              className="nav-link text-white" 
              aria-current="page" 
              to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link text-white" to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
