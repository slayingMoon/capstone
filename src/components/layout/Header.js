import './Header.css';
import logoImage from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'Reservations', path: '/reservations'},
        {name: 'Order Online', path: '/order-online'},
        {name: 'Login', path: '/login'},
    ];

    return (
        <header>
        <nav className='container grid navbar'>
          <Link className='navbar-logo' to="">
            <img src={logoImage} alt='Little Lemon Logo'/>
          </Link>
          <ul className='navbar-items'>
            {navItems.map((navItem, index) => 
              <li key={index}>
                <Link to={navItem.path}>
                  {navItem.name}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
};

export default Header;