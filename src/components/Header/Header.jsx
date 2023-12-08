import { NavLink } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "white", 
    color: "black",   
  };

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3" style={headerStyle}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">
          Car rental
        </span>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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