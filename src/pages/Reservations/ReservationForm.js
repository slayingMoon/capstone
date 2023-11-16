import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReservationForm.css';
import { faCalendarCheck, faCalendarDays, faChair, faChampagneGlasses, faClock, faEnvelope, faPhone, faUserAlt, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const ReservationForm = () => {
    return (
        <section className="table-reserve container">
            <FontAwesomeIcon icon={faCalendarCheck} id='calendar-icon' />
            <h1>Reserve a table</h1>
            <form>
                <div className='input-box'>
                    <div className='field-group'>
                        <input
                            className="input-field"
                            type="text"
                            id="full-name"
                            name="full-name"
                            required
                            placeholder="Full name"
                        />
                        <div className='icon'>
                            <FontAwesomeIcon icon={faUserAlt} />
                        </div>                    
                    </div>
                    <div className='field-group'>
                        <input
                            className="input-field"
                            type="text"
                            id="phone-number"
                            name="ohone-number"
                            required
                            placeholder="Phone Number"
                        />
                        <div className='icon'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>                    
                    </div>
                </div>
                <div className='input-box'>
                    <div className='row-2'>
                        <div className='field-group'>
                            <input
                                className="input-field"
                                type="text"
                                id="full-name"
                                name="full-name"
                                required
                                placeholder="People"
                            />
                            <div className='icon'>
                                <FontAwesomeIcon icon={faUserGroup} />
                            </div>                    
                        </div>
                        <div className='field-group'>
                            <input
                                className="input-field"
                                type="text"
                                id="full-name"
                                name="full-name"
                                required
                                placeholder="Occasion"
                            />
                            <div className='icon'>
                                <FontAwesomeIcon icon={faChampagneGlasses} />
                            </div>                    
                        </div>
                        <div className='field-group'>
                            <input
                                className="input-field"
                                type="text"
                                id="full-name"
                                name="full-name"
                                required
                                placeholder="Seating"
                            />
                            <div className='icon'>
                                <FontAwesomeIcon icon={faChair} />
                            </div>                    
                        </div>
                    </div>
                    <div className='row-2'>
                        <div className='input-box'>
                            <div className='field-group'>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="phone-number"
                                    name="ohone-number"
                                    required
                                    placeholder="DD/MM/YYYY"
                                />
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </div>                    
                            </div>
                            <div className='field-group'>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="phone-number"
                                    name="ohone-number"
                                    required
                                    placeholder="11:00 AM"
                                />
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faClock} />
                                </div>                    
                            </div>
                        </div>
                        <div className='field-group h-full'>
                            <textarea
                                className="input-field h-full"
                                type="textarea"
                                id="phone-number"
                                name="ohone-number"
                                required
                                placeholder="Message"
                            >
                            </textarea>
                            <div className='icon area'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>                    
                        </div>
                    </div>
                </div>
                <button>Reserve Table</button>
            </form>
        </section>
    );
};

export default ReservationForm;