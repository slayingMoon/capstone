import HeroReservation from "./HeroReservation";
import Popular from "./Popular";
import BookingForm from "./BookingForm";
import WorkingHours from "./WorkingHours";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import { fetchAPI, submitAPI } from "../../utils/bookingsApi";

//reducer function - takes state and action - date being the action
const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
};

//initializer - initializer function that should return the initial state
//initial state is set to the result of calling init(initialArg)
//in our case initializeTimes([]) - [] being the initializerArg
const initializeTimes = (initialAvailableTimes) => {
    return [...initialAvailableTimes, ...fetchAPI(new Date())];
};

const Bookings = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate();

    const submitData = form => {
        const response = submitAPI(form);
        console.log(form);
        if(response) {
            navigate('/bookings-confirmation');
        }
    };

    return (
        <>
            <HeroReservation />
            <BookingForm 
                submitData={submitData}
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
            />
            <WorkingHours />
            <Popular />
        </>
    );
};

export default Bookings;