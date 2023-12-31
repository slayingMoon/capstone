import { Link } from "react-router-dom";
import bruschettaImage from '../../assets/bruschetta.png';
import greekSaladImage from '../../assets/greek-salad.jpg';
import lemonDessertImage from '../../assets/lemon-dessert.png';
import MealCard from "./MealCard";
import './WeekSpecials.css';

const meals = [
    {
      name: 'Greek Salad',
      image: greekSaladImage,
      price: '$12.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschettaImage,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessertImage,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
];

const WeekSpecials = () => {
    return (
        <section className='container grid specials'>
            <div className='specials-header'>
                <h2>This week specials!</h2>
                <div className="btn-container">
                    <Link className="button-primary btn btn-a" to="/order-online">
                            Online Menu
                    </Link>
                </div>
            </div>
            {meals.map((meal, index) => 
                <MealCard key={index} meal={meal}/>
            )}
        </section>
    );
};

export default WeekSpecials;