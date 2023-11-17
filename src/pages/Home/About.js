import chefMarioImage from '../../assets/mario.png';
import chefsAdrianAndMarioImage from '../../assets/adrian.png';
import './About.css';

const About = () => {
    return (
        <section className='container grid about'>
            <div className='about-description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <div className='text'>
                    <p>
                    At Little Lemon, we believe in crafting culinary experiences that transport you straight to the cobblestone streets of Italy.
                    </p>
                    <p>
                    Mario and Adrian, the passionate visionaries behind Little Lemon, share a deep-rooted love for Mediterranean flavors and a commitment to creating a welcoming atmosphere.
                    </p>
                    <p>
                    Step inside Little Lemon and feel the cozy ambiance that Mario and Adrian have carefully curated.
                    </p>
                </div>
            </div>
            <div className='about-chefs'>
                <img 
                    className='first' 
                    src={chefMarioImage} 
                    alt='Chef Mario'
                />
                <img 
                    className='overlap' 
                    src={chefsAdrianAndMarioImage} 
                    alt='Chefs Mario and Adrian'
                />
            </div>
        </section>
    );
};

export default About;