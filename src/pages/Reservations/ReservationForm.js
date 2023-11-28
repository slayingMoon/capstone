import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReservationForm.css';
import { faCalendarCheck, faCalendarDays, faChair, faChampagneGlasses, faClock, faEnvelope, faPhone, faUserAlt, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const ReservationForm = () => {
    return (
        <section className="table-reserve container">
            <FontAwesomeIcon icon={faCalendarCheck} id='calendar-icon' />
            <h1>Reserve a table</h1>
            <form>
                <div className='input-box personal'>
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
                            name="phone-number"
                            required
                            placeholder="Phone Number"
                        />
                        <div className='icon'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>                    
                    </div>
                </div>
                <div className='input-box other'>
                    <div className='row-2'>
                        <div className='field-group'>
                            <input
                                className="input-field"
                                type="number"
                                id="people"
                                name="people"
                                required
                                placeholder="People"
                            />
                            <div className='icon'>
                                <FontAwesomeIcon icon={faUserGroup} />
                            </div>                    
                        </div>
                        <div className='field-group'>
                            <select
                                className="input-field"
                                id="occasion"
                                name="occasion"
                                required
                                placeholder="Occasion"
                            >
                                <option value="birthday">Birthday</option>
                                <option value="engagement">Engagement</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="other">Other</option>
                            </select>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faChampagneGlasses} />
                            </div>                    
                        </div>
                        <div className='field-group'>
                            <div className="input-field box-input row-2">
                                <div className='icon-checkbox'>
                                    <FontAwesomeIcon icon={faChair} />
                                    <p>Seating</p>
                                </div>
                                <div className='radio'>
                                    <input className='radio__input' type="radio" id="indoors" name="seating" value="indoors" defaultChecked/>
                                    <label className='radio__label' for="indoors">Indoors</label>
                                    <input className='radio__input' type="radio" id="outdoors" name="seating" value="outdoors"/>
                                    <label className='radio__label' for="outdoors">Outdoors</label>
                                </div>
                            </div>                
                        </div>
                    </div>
                    <div className='row-2'>
                        <div className='input-box date-time'>
                            <div className='field-group'>
                                <input
                                    className="input-field"
                                    type="date"
                                    id="date"
                                    name="date"
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
                                    type="time"
                                    id="time"
                                    name="time"
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