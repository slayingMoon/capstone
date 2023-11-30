export const nameValidator = name => {
    if(!name) {
        return "Please enter a name";
    } else if (!new RegExp(/^[A-Za-z]{4,}$/).test(name)) {
        return "Name must be at least 4 characters long";
    }
    return "";
};

export const phoneValidator = phone => {
    if (!phone) {
        return "Please enter a phone number";
    } else if (!new RegExp(/^\+?[0-9]{10}$/).test(phone)) {
        return "Phone number must be at least 10 digits";
    }
    return "";
};

export const guestValidator = guests => {
    const guestCount = parseInt(guests, 10);
    if (!guests || isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
        return "Guests must be between 1 and 10"
    }
    return "";
};

export const dateValidator = date => {
    if (!date) {
        return "Please enter a valid date";
    }
    return "";
};

export const timeValidator = time => {
    if (!time) {
        return "Please select a time";
    }
    return "";
};

export const occasionValidator = occasion => {
    if (!occasion) {
        return "Please select occasion";
    }
    return "";
};

export const seatingValidator = seating => {
    if (!seating) {
        return "Please choose a seating option";
    }
    return "";
};

export const messageValidator = message => {
    if (message.length > 20) {
        return "Message is too long";
    }
    return "";
};