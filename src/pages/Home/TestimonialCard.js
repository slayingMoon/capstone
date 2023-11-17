import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TestimonialCard.css';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const TestimonialCard = ({ customer }) => {
    return (
        <article className='testimonial-card'>
            <span>
                {customer.rating.map((ratingPoint, index) => 
                <FontAwesomeIcon
                    key={index}
                    icon={ratingLevels[ratingPoint]}
                    size='xs'
                />
                )}
            </span>
            <div className='img-container'>
                <img src={customer.image} alt={customer.fullName}/>
                <h4>{customer.fullName}</h4>
            </div>
            <blockquote><p className='review'>"{customer.says}"</p></blockquote>
        </article>
    );
};

export default TestimonialCard;