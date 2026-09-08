import './Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner central-column">
        <img className="header__logo" src={Logo} alt="Logo de Half Truth" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
                to="/cases"
              >
                Casos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
