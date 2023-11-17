import './Footer.css';
import {
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import footerLogo from '../../assets/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'Reservations', path: '/reservations'},
        {name: 'Order Online', path: '/order-online'},
        {name: 'Login', path: '/login'},
    ];

    const contacts = [
        { icon: faLocationDot, info: '123 Olive Street, Chicago, IL 60610', },
        { icon: faPhone, info: '(312) 555-7890', },
        { icon: faEnvelope, info: 'contact@littlelemon.com', },
    ];
      
    const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', }
    ];

    return (
        <footer className='footer'>
            <div className='container grid'>
                <img 
                    className='footer-logo' 
                    src={footerLogo} 
                    alt='Little Lemon Logo'
                />
                <nav className='footer-nav'>
                    <h4>Useful Links</h4>
                    <ul>
                        {navItems.map((navItem, index) => 
                            <li key={index}>
                                <Link to={navItem.path}>{navItem.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className='footer-contact'>
                    <h4>Contact us</h4>
                    <address>
                        {contacts.map((contact, index) => 
                            <div className='contact-info' key={index}>
                                <FontAwesomeIcon icon={contact.icon} />
                                <p>
                                    {contact.info}
                                </p>
                            </div>
                        )}
                    </address>
                </div>
                <div className='footer-socials'>
                    <h4>Follow us</h4>
                    <div className='icons-container'>
                        {socials.map((social, index) => 
                            <a
                            key={index}
                            href={`https://www.${social.name}.com`}
                            >
                            <FontAwesomeIcon icon={social.icon} size='lg'/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
      </footer>
    );
};

export default Footer;