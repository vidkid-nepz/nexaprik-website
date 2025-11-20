import fs from 'fs/promises';
import path from 'path';
import { Booking } from '@/lib/types/Booking';

const dataFilePath = path.join(process.cwd(), 'data', 'bookings.json');

export async function getBookings(): Promise<Booking[]> {
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        // If file doesn't exist, return empty array
        return [];
    }
}

export async function saveBookings(bookings: Booking[]) {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(bookings, null, 4), 'utf-8');
    } catch (error) {
        console.error('Error writing bookings file:', error);
        throw new Error('Failed to save bookings');
    }
}

export async function createBooking(bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>): Promise<Booking> {
    const bookings = await getBookings();

    const newBooking: Booking = {
        ...bookingData,
        id: Math.random().toString(36).substring(2, 9),
        status: 'pending',
        createdAt: new Date().toISOString(),
    };

    bookings.unshift(newBooking); // Add to beginning
    await saveBookings(bookings);

    return newBooking;
}

export async function updateBookingStatus(id: string, status: Booking['status']): Promise<Booking | null> {
    const bookings = await getBookings();
    const index = bookings.findIndex(b => b.id === id);

    if (index === -1) return null;

    bookings[index].status = status;
    await saveBookings(bookings);

    return bookings[index];
}

export async function deleteBooking(id: string): Promise<boolean> {
    const bookings = await getBookings();
    const filteredBookings = bookings.filter(b => b.id !== id);

    if (filteredBookings.length === bookings.length) return false;

    await saveBookings(filteredBookings);
    return true;
}
