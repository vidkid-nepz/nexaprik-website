import { NextResponse } from 'next/server';
import { getBookings, createBooking } from '@/lib/bookings';

export async function GET() {
    try {
        const bookings = await getBookings();
        return NextResponse.json(bookings);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.customerName || !body.email || !body.date || !body.guests) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newBooking = await createBooking(body);
        return NextResponse.json(newBooking, { status: 201 });
    } catch (error) {
        console.error('Booking creation error:', error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}
