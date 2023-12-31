import { Link } from "react-router-dom";
import restaurantFoodImage from '../../assets/restaurant-food.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container grid'>
                <div className="hero-details">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                    </p>
                    <div className="btn-container">
                        <Link className="button-primary btn-a" to="/bookings">
                        Reserve a table
                        </Link>
                    </div>
                </div>
                <img 
                    className="hero-image" 
                    src={restaurantFoodImage} 
                    alt="Restaurant food" 
                />
            </div>
        </section>
    );
};

export default Hero;