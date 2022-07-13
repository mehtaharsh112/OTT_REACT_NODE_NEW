import ES_LOGO from '../images/ES_LOGO.png'
import ButtonA from './Button/ButtonA';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg header-back">
        <div className="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler float-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                {/* <a class="nav-link" aria-current="page" href="#">
                  <img src={ES_LOGO} alt="" width="20px" height="20px" />
                </a> */}
                <a className="navbar-brand" href="#">
    
      <img src={ES_LOGO} alt="" width="100" height="100"/>
    </a>
     {/* <a class="nav-link" href="#">
                  ES
                </a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span id='hov-border'>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span id='hov-border'>About Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span id='hov-border'>Contact Us</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span id='hov-border'>Epitome</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                        Horror/Thriller
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                        Sci-Fi/Fantasy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Children/Tweens
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Literary-Inspired Webseries
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Erotic
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                  <ButtonA title="Register" bgcol="#8AB4F8" col="#202124" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    <ButtonA title="Login" bgcol="#8AB4F8" col="#202124"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
