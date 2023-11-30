import { useState } from 'react';
import {
    nameValidator,
    phoneValidator,
    guestValidator,
    dateValidator,
    timeValidator,
    occasionValidator,
    seatingValidator,
    messageValidator
} from '../validators.js';

const touchErrors = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true,
        };
        return acc;
    }, {});
};

export const useBookingFormValidator = form => {
    const [errors, setErrors] = useState({
        name: {
            dirty: false,
            error: false,
            message: "",
        },
        phoneNumber: {
            dirty: false,
            error: false,
            message: "",
        },
        guests: {
            dirty: false,
            error: false,
            message: "",
        },
        date: {
            dirty: false,
            error: false,
            message: "",
        },
        time: {
            dirty: false,
            error: false,
            message: "",
        },
        occasion: {
            dirty: false,
            error: false,
            message: "",
        },
        seating: {
            dirty: false,
            error: false,
            message: "",
        },
        message: {
            dirty: false,
            error: false,
            message: "",
        },
    });

    const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        let nextErrors = JSON.parse(JSON.stringify(errors));

        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { name, phoneNumber, guests, date, time, occasion, seating, message } = form;

        if (nextErrors.name.dirty && (field ? field === 'name' : true)) {
            const nameMessage = nameValidator(name, form);
            nextErrors.name.error = !!nameMessage;
            nextErrors.name.message = nameMessage;
            if (!!nameMessage) {
                isValid = false;
            }
        }

        if (nextErrors.phoneNumber.dirty && (field ? field === 'phoneNumber' : true)) {
            const phoneMessage = phoneValidator(phoneNumber, form);
            nextErrors.phoneNumber.error = !!phoneMessage;
            nextErrors.phoneNumber.message = phoneMessage;
            if (!!phoneMessage) {
                isValid = false;
            }
        }

        if (nextErrors.guests.dirty && (field ? field === 'guests' : true)) {
            const guestsMessage = guestValidator(guests, form);
            nextErrors.guests.error = !!guestsMessage;
            nextErrors.guests.message = guestsMessage;
            if (!!guestsMessage) {
                isValid = false;
            }
        }

        if (nextErrors.date.dirty && (field ? field === 'date' : true)) {
            const dateMessage = dateValidator(date, form);
            nextErrors.date.error = !!dateMessage;
            nextErrors.date.message = dateMessage;
            if (!!dateMessage) {
                isValid = false;
            }
        }

        if (nextErrors.time.dirty && (field ? field === 'time' : true)) {
            const timeMessage = timeValidator(time, form);
            nextErrors.time.error = !!timeMessage;
            nextErrors.time.message = timeMessage;
            if (!!timeMessage) {
                isValid = false;
            }
        }

        if (nextErrors.occasion.dirty && (field ? field === 'occasion' : true)) {
            const occasionMessage = occasionValidator(occasion, form);
            nextErrors.occasion.error = !!occasionMessage;
            nextErrors.occasion.message = occasionMessage;
            if (!!occasionMessage) {
                isValid = false;
            }
        }

        if (nextErrors.seating.dirty && (field ? field === 'seating' : true)) {
            const seatingMessage = seatingValidator(seating, form);
            nextErrors.seating.error = !!seatingMessage;
            nextErrors.seating.message = seatingMessage;
            if (!!seatingMessage) {
                isValid = false;
            }
        }

        if (nextErrors.message.dirty && (field ? field === 'message' : true)) {
            const messageMsg = messageValidator(message, form);
            nextErrors.message.error = !!messageMsg;
            nextErrors.message.message = messageMsg;
            if (!!messageMsg) {
                isValid = false;
            }
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors
        };
    };

    const onBlurField = e => {
        const field = e.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) {
            return;
        }

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateForm({ form, field, errors: updatedErrors });
    };

    return {
        validateForm,
        onBlurField,
        errors
    };
};