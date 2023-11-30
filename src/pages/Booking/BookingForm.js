import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BookingForm.css';
import { faCalendarCheck, faChair, faChampagneGlasses, faClock, faEnvelope, faPhone, faUserAlt, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import FieldGroup from './FieldGroup';
import { useBookingFormValidator } from './hooks/useBookingFormValidator';

const BookingForm = ({ 
    submitData, 
    availableTimes, 
    dispatchOnDateChange 
}) => {
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Birthday', 'Engagement', 'Anniversary', 'Other'];
    const seatingOptions = ['Indoors', 'Outdoors'];

    const [form, setForm] = useState({
        name: '',
        phoneNumber: '',
        guests: '',
        date: '',
        time: '',
        occasion: '',
        seating: seatingOptions[0],
        message: ''
    });

    const { errors, validateForm, onBlurField } = useBookingFormValidator(form);

    const onUpdateField = (e) => {
        const field = e.target.name;
        const nextFormState = {
            ...form,
            [field]: e.target.value
        };
        setForm(nextFormState);

        if (errors[field].dirty) {
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
        }

        if(field === 'date' && new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(e.target.value)) {
            dispatchOnDateChange(e.target.value);
        }
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        const { isValid } = validateForm({form, errors, forceTouchErrors: true});
        if (!isValid) {
            return;
        }
        submitData(form);
        resetForm();
    };

    const resetForm = () => {
        setForm({
            name: '',
            phoneNumber: '',
            guests: '',
            date: '',
            time: '',
            occasion: '',
            seating: seatingOptions[0],
            message: ''
        });
    };

    return (
        <section className="table-reserve container">
            <FontAwesomeIcon icon={faCalendarCheck} id='calendar-icon' />
            <h2>Reserve a table</h2>
            <form onSubmit={onSubmitForm}>
                <div className='input-box personal'>
                    <FieldGroup
                        field={errors.name}
                    >
                        <input
                            label="Full Name"
                            aria-label="Your Name"
                            data-testid="name"
                            className="input-field"
                            type="text"
                            id="name"
                            name="name"                                                
                            placeholder="Full name"  
                            value={form.name}
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        />
                        <div className='icon'>
                            <FontAwesomeIcon icon={faUserAlt} />
                        </div>                   
                    </FieldGroup>
                    <FieldGroup
                        field={errors.phoneNumber}
                    >
                        <input
                            label="Phone Number"
                            aria-label="Your Phone Number"
                            data-testid="phone"
                            className="input-field"
                            type="text"
                            id="phone-number"
                            name="phoneNumber"                            
                            placeholder="Phone Number"
                            value={form.phoneNumber}
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        />
                        <div className='icon'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>                    
                    </FieldGroup>
                </div>
                <div className='input-box other'>
                    <div className='row-2'>
                        <FieldGroup
                            field={errors.guests}
                        >
                            <input
                                label="Number of Guests"
                                aria-label="Number Of Guests"
                                data-testid="guests"
                                className="input-field"
                                type="number"
                                id="guests"
                                name="guests"                                
                                placeholder="Guests"
                                min={minimumNumberOfGuests}
                                max={maximumNumberOfGuests}
                                value={form.guests}
                                onChange={onUpdateField}
                                onBlur={onBlurField}
                            />
                            <div className='icon'>
                                <FontAwesomeIcon icon={faUserGroup} />
                            </div>                    
                        </FieldGroup>
                        <FieldGroup
                            field={errors.occasion}
                        >
                            <select  
                                label="Occasion"
                                aria-label="Your Occasion"
                                data-testid='occasion-select'                              
                                className="input-field"
                                id="occasion"
                                name="occasion"                                
                                placeholder="Occasion"
                                value={form.occasion}
                                onChange={onUpdateField}
                                onBlur={onBlurField}
                            >
                                <option value="" disabled>Occasion</option>
                                {occasions.map(occasion => 
                                    <option data-testid="occasion-option" key={occasion}>{occasion}</option>
                                )}                                
                            </select>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faChampagneGlasses} />
                            </div>                    
                        </FieldGroup>
                        <FieldGroup
                            field={errors.seating}
                        >
                            <div className="input-field box-input row-2">
                                <div className='icon-checkbox'>
                                    <FontAwesomeIcon icon={faChair} />
                                    <p>Seating</p>
                                </div>
                                <div className='radio'>
                                    <input 
                                        label="Indoor Seating"
                                        aria-label="Indoor Seating"
                                        data-testid="seating"
                                        className='radio__input' 
                                        type="radio" 
                                        id="indoors" 
                                        name="seating" 
                                        value="Indoors"
                                        aria-checked={form.seating === "Outdoors"}
                                        checked={form.seating === "Indoors"}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    <label className='radio__label' htmlFor="indoors">Indoors</label>
                                    <input 
                                        label="Outdoor Seating"
                                        aria-label="Outdoor Seating"
                                        data-testid="seating"
                                        className='radio__input' 
                                        type="radio" 
                                        id="outdoors" 
                                        name="seating" 
                                        value="Outdoors"
                                        aria-checked={form.seating === "Outdoors"}
                                        checked={form.seating === "Outdoors"}
                                        onChange={onUpdateField}
                                        onBlur={onBlurField}
                                    />
                                    <label className='radio__label' htmlFor="outdoors">Outdoors</label>
                                </div>
                            </div>                
                        </FieldGroup>
                    </div>
                    <div className='row-2'>
                        <div className='input-box date-time'>
                            <FieldGroup
                                field={errors.date}
                            >
                                <input
                                    label="Reservation Date"
                                    aria-label="Your Reservation Date"
                                    data-testid="booking-date"
                                    className="input-field date"
                                    type="date"
                                    id="date"
                                    name="date"                                    
                                    placeholder="DD/MM/YYYY"
                                    value={form.date}
                                    onChange={onUpdateField}
                                    onBlur={onBlurField}
                                />                   
                            </FieldGroup>
                            <FieldGroup
                                field={errors.time}
                            >
                                <select 
                                    label="Reservation Time"
                                    aria-label="Your Reservation Time"
                                    data-testid="time-select"
                                    className="input-field" 
                                    id="res-time"
                                    name="time"
                                    value={form.time}
                                    onChange={onUpdateField}
                                    onBlur={onBlurField}
                                >
                                    <option value="" disabled>Time</option>
                                    {availableTimes.map(time => 
                                        <option data-testid="booking-slot" key={time}>{time}</option>
                                    )}                                    
                                </select>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faClock} />
                                </div>                    
                            </FieldGroup>
                        </div>
                        <FieldGroup
                            field={errors.message}
                            className={'h-full'}
                        >
                            <textarea
                                label="Message"
                                aria-label="Your Message"
                                data-testid="message"
                                className="input-field h-full"
                                type="textarea"
                                id="message"
                                name="message"                                
                                placeholder="Message"
                                value={form.message}
                                onChange={onUpdateField}
                                onBlur={onBlurField}
                            >
                            </textarea>
                            <div className='icon area'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>                    
                        </FieldGroup>
                    </div>
                </div>
                <input aria-label="Make Reservation" data-testid="submit-btn" className="btn" type="submit" value="Make Your reservation" disabled={Object.values(errors).some((field) => field.message !== '')}/>
            </form>
        </section>
    );
};

export default BookingForm;