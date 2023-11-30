import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Bookings from "./";

describe('Bookings page', () => {

    test('should have available booking slots', async () => {
        render(
            <MemoryRouter>
                <Bookings />
            </MemoryRouter>
        );

        const bookingSlots = await screen.findAllByTestId('booking-slot');

        expect(bookingSlots.length).toBeGreaterThanOrEqual(1);
    });

    test('should update booking slots when booking date changes', async () => {
        render(
            <MemoryRouter>
                <Bookings />
            </MemoryRouter>
        );

        const bookingDate = '2023-11-29';
        const dateInput = await screen.findByTestId('booking-date');
        const initialTimeSlots = await screen.findAllByTestId('booking-slot');
        fireEvent.change(dateInput, { target: { value: bookingDate }});
        fireEvent.blur(dateInput);
        const updatedTimeSlots = await screen.findAllByTestId('booking-slot');

        expect(dateInput).toHaveValue(bookingDate);
        expect(initialTimeSlots.length).not.toBe(updatedTimeSlots.length);
    });

});