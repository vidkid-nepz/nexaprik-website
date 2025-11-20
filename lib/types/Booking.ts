export interface Booking {
    id: string;
    destinationId?: string;
    destinationName?: string;
    customerName: string;
    email: string;
    phone?: string;
    date: string;
    guests: number;
    message?: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: string;
}
