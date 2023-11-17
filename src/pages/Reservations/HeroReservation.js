import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroReservation from '../../assets/hero-reservation.png';
import './HeroReservation.css';
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';

const HeroReservation = () => {
    return (
        <>
        <section className='hero-reservation'>
            <img src={heroReservation} alt='Table Reservation'/>
            <div className='overlay flex-col'>
                <div className='header flex-col'>
                    <h1>Table Reservation</h1>
                </div>                
                <div className='hero-bottom flex-col'>
                    <div className='line'></div>
                    <div className='nav flex'>
                        <div className='flex home'>
                            <div className='home-icon'>
                                <FontAwesomeIcon icon={faHouse} size='xs'/>
                            </div>
                            <p>Home</p>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} />
                        <p>Table Reservation</p>                     
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HeroReservation;