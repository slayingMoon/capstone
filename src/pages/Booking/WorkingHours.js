import workingHoursBg from '../../assets/working-hours.png';
import './WorkingHours.css';

const WorkingHours = () => {
    return (
        <section className='working-hours'>
            <img src={workingHoursBg} alt='Working Hours Background'/>
            <div className='overlay'>
                <div className='work-hours container'>
                    <p className='work-hours__address'>
                        123 Olive Street, Chicago, 
                        <br/>IL 60610
                        <br/>Reservations: (312) 555-7890
                    </p>
                    <div className='work-hours__time'>
                        <p>
                            Monday - Friday : 11AM - 9PM
                        </p>
                        <p>
                            Saturday - Sunday : 11AM - 12PM
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingHours;