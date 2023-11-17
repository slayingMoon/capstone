import customer1Image from '../../assets/client1.png';
import customer2Image from '../../assets/client2.png';
import customer3Image from '../../assets/client3.png';
import customer4Image from '../../assets/client4.png';
import TestimonialCard from "./TestimonialCard";
import './Testimonials.css';

const customers = [
    {
      fullName: 'Jane Doe',
      image: customer1Image,
      rating: [1, 1, 1, 1, 0.5],
      says: `Little Lemon's pasta is a taste of Italy - simple, fresh, and absolutely delicious. A hidden gem!`,
    },
    {
      fullName: 'Henry Kean',
      image: customer2Image,
      rating: [1, 1, 1, 1, 1],
      says: `Authentic flavors, cozy ambiance – Little Lemon brings Italy to you. Mario and Adrian create magic!`,
    },
    {
      fullName: 'Ellie Joel',
      image: customer3Image,
      rating: [1, 1, 1, 1, 0.5],
      says: `Little Lemon is a delightful surprise! Mario and Adrian's passion for Italian cuisine shines in every dish`,
    },
    {
      fullName: 'Bill Gibbs',
      image: customer4Image,
      rating: [1, 1, 1, 1, 0.5],
      says: `I've dined at many Italian restaurants, but Little Lemon stands out with its genuine commitment to quality.`,
    },
];

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className='container grid'>
              <h2>Our Clients</h2>
              {customers.map((customer, index) => 
                  <TestimonialCard key={index} customer={customer} />
              )}
            </div>
        </section>
    );
};

export default Testimonials;