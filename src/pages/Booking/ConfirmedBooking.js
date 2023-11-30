import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ConfirmedBooking.css';
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return (
      <div className="container confirmed-booking">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <h2>Reservation <br/>successful</h2>
        <div className="btn-container">
          <Link className="button-primary btn btn-a" to="/">Done</Link>
        </div>        
      </div>
    );
};

export default ConfirmedBooking;