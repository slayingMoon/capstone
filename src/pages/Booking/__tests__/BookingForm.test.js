import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("Booking Form", () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const currentDate = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={availableTimes}/>);
        const headingElement = screen.getByText("Reserve a table");
        expect(headingElement).toBeInTheDocument();
    });

    test('should render all form fields properly', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData}/>
        );

        const nameInput = await screen.findByTestId('name');
        const phoneNumberInput = await screen.findByTestId('phone');
        const guestsInput = await screen.findByTestId('guests');
        const occasionSelect = await screen.findByTestId('occasion-select');
        const occasionOptions = await screen.findAllByTestId('occasion-option');
        const seatingRadioButtons = await screen.findAllByTestId('seating');
        const dateInput = await screen.findByTestId('booking-date');
        const timeSelect = await screen.findByTestId('time-select');
        const timeSelectOptions = await screen.findAllByTestId('booking-slot');
        const messageInput = await screen.findByTestId('message');
        const submitButton = await screen.findByTestId('submit-btn');

        expect(nameInput).toBeInTheDocument();
        expect(nameInput).toHaveAttribute('type', 'text');
        expect(nameInput).toHaveAttribute('id', 'name');
        expect(nameInput).toHaveValue('');

        expect(phoneNumberInput).toBeInTheDocument();
        expect(phoneNumberInput).toHaveAttribute('id', 'phone-number');
        expect(phoneNumberInput).toHaveValue('');

        expect(guestsInput).toBeInTheDocument();
        expect(guestsInput).toHaveAttribute('id', 'guests');
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveValue(null);

        expect(occasionSelect).toBeInTheDocument();
        expect(occasionSelect).toHaveAttribute('id', 'occasion');
        expect(occasionSelect).toHaveValue('');
        expect(occasionOptions.length).toBe(4);

        expect(seatingRadioButtons.length).toBe(2);
        expect(seatingRadioButtons[0]).toBeInTheDocument();
        expect(seatingRadioButtons[1]).toBeInTheDocument();
        expect(seatingRadioButtons[0]).toHaveAttribute('checked', '');

        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'date');
        expect(dateInput).toHaveValue('');

        expect(timeSelect).toBeInTheDocument();
        expect(timeSelect).toHaveAttribute('id', 'res-time');
        expect(timeSelectOptions.length).toBe(3);
        expect(timeSelect).toHaveValue('');

        expect(messageInput).toBeInTheDocument();
        expect(messageInput).toHaveAttribute('id', 'message');
        expect(messageInput).toHaveValue('');

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toBeEnabled();
    });

    test('should successfully submit form when all fields are valid', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange}/>
        );

        const nameInput = await screen.findByTestId('name');        
        fireEvent.change(nameInput, { target: { value: 'John' } });
        fireEvent.blur(nameInput);

        const phoneNumberInput = await screen.findByTestId('phone');
        fireEvent.change(phoneNumberInput, { target: { value: '+2223334444' } });
        fireEvent.blur(phoneNumberInput);

        const guestsInput = await screen.findByTestId('guests');
        fireEvent.change(guestsInput, { target: { value: 1 } });
        fireEvent.blur(guestsInput);

        const occasionSelect = await screen.findByTestId('occasion-select');
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
        fireEvent.blur(occasionSelect);

        const dateSelect = await screen.findByTestId('booking-date');
        fireEvent.change(dateSelect, { target: { value: currentDate } });
        fireEvent.blur(dateSelect);

        const timeSelect = await screen.findByTestId('time-select');
        fireEvent.change(timeSelect, { target: { value: availableTimes[0] } });
        fireEvent.blur(timeSelect);

        const submitButton = await screen.findByTestId('submit-btn');
        fireEvent.click(submitButton);

        expect(submitData).toHaveBeenCalledWith({ 
            name: 'John',
            phoneNumber: '+2223334444',
            guests: '1',
            occasion: 'Birthday', 
            seating: 'Indoors',
            date: currentDate, 
            time: availableTimes[0],
            message: '',
        });
    });

    test('should display error message and disable submit button when name field is invalid', async () => {
        render(
            <BookingForm 
                availableTimes={availableTimes} 
                submitData={submitData}
                dispatchOnDateChange={dispatchOnDateChange}
            />
        );

        const nameInput = await screen.findByTestId('name');        
        fireEvent.change(nameInput, { target: { value: '' } });
        fireEvent.blur(nameInput);
        const errorMessage = await screen.getByTestId('error-message');
        const submitButton = await screen.findByTestId('submit-btn');
    
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Please enter a name');
        expect(submitButton).toBeDisabled();
    });

    test('should display error message and disable submit button when phone number field is invalid', async () => {
        render(
            <BookingForm 
                availableTimes={availableTimes} 
                submitData={submitData}
                dispatchOnDateChange={dispatchOnDateChange}
            />
        );

        const phoneNumberInput = await screen.findByTestId('phone');      
        fireEvent.change(phoneNumberInput, { target: { value: '' } });
        fireEvent.blur(phoneNumberInput);
        const errorMessage = await screen.getByTestId('error-message');
        const submitButton = await screen.findByTestId('submit-btn');
    
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Please enter a phone number');
        expect(submitButton).toBeDisabled();
    });
});