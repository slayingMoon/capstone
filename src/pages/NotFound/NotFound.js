import notFoundGif from '../../assets/not-found.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container not-found">
            <div className='img__title'>
                <h1>Oops!</h1>
                <h2>We can't seem to find the page you're looking for.</h2>
            </div>
            <img src={notFoundGif} alt='Not Found'/>
        </div>
    );
};

export default NotFound;