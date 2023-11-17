import './Popular.css';
import PopularCard from './PopularCard';
import bruschettaImage from '../../assets/bruschetta-cust.png';
import greekSaladImage from '../../assets/greek-salad-cust.png';
import lemonDessertImage from '../../assets/lemon-dessert-cust.png';

const populars = [
    {
      name: 'Greek Salad',
      image: greekSaladImage,
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschettaImage,
      description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessertImage,
      description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
];

const Popular = () => {
    return (
        <section className='container grid popular'>
            <h1>Popular Items</h1>
            <div className='card__container'>
                    {populars.map((popular, index) => 
                        <PopularCard key={index} popular={popular}/>
                    )}
            </div>
        </section>
    );
};

export default Popular;