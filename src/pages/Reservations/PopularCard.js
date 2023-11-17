import { Link } from 'react-router-dom';
import './PopularCard.css';

const PopularCard = ({popular}) => {
    return (
        <article className='card__article'>
            <img src={popular.image} alt={popular.name} className='card__img'/>

            <div className='card__data'>
                <span className='card__description'>{popular.description}</span>
                <h2 className='card__title'>{popular.name}</h2>
                <Link to="">Order</Link>
            </div>
        </article>
    );
};

export default PopularCard;