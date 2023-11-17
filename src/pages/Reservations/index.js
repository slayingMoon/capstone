import HeroReservation from "./HeroReservation";
import Popular from "./Popular";
import ReservationForm from "./ReservationForm";
import WorkingHours from "./WorkingHours";

const Reservations = () => {
    return (
        <>
            <HeroReservation />
            <ReservationForm />
            <WorkingHours />
            <Popular />
        </>
    );
};

export default Reservations;