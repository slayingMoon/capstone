import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ConfirmedBooking.css';
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return (
      <div className="container confirmed-booking">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <h2>Reservation <br/>successful</h2>
        <Link className="button-primary btn" to="/">Done</Link>
      </div>
    );
};

export default ConfirmedBooking;