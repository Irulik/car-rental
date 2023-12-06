
const Header = () => {
  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
              className="nav-link text-white" 
              aria-current="page" 
              href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/catalog">
                Cataolog
              </a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/favorites">
                Favorites
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
