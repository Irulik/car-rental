import { NavLink } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "white", 
    color: "black",   
  };

  return (
    <nav className="navbar mb-3 navbar-expand-lg" style={headerStyle}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">
          Car rental
        </span>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item me-4">
                <NavLink 
                  className="nav-link fs-5" 
                  aria-current="page" 
                  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink className="nav-link fs-5" to="/catalog">
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink className="nav-link fs-5" to="/favorites">
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
          <hr style={{ margin: "0" }} /> {/* Лінія hr */}
        </div>
      </div>
    </nav>
  );
};

export default Header;