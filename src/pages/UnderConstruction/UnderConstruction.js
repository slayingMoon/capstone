import constructionImg from '../../assets/construction.png';
import './UnderConstruction.css';

const UnderConstruction = () => {
    return (
        <div className="container under-construction">
            <img src={constructionImg} alt='Under Construction'/>
            <div className='img__title'>
                <h1>This page is under construction</h1>
                <h2>We're working on it!!</h2>
            </div>
        </div>
    );
};

export default UnderConstruction;