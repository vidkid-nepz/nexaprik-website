import { NextResponse } from 'next/server';
import { getDestinations, saveDestinations } from '@/lib/destinations';
import { Destination } from '@/lib/types/Destination';

export async function GET() {
    const destinations = await getDestinations();
    return NextResponse.json(destinations);
}

export async function POST(request: Request) {
    try {
        const newDestination: Destination = await request.json();
        const destinations = await getDestinations();

        // Simple validation
        if (!newDestination.name || !newDestination.slug) {
            return NextResponse.json({ error: 'Name and Slug are required' }, { status: 400 });
        }

        // Check for duplicate slug
        if (destinations.some(d => d.slug === newDestination.slug)) {
            return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
        }

        // Add new destination
        destinations.push(newDestination);
        await saveDestinations(destinations);

        return NextResponse.json(newDestination, { status: 201 });
    } catch (error) {
        console.error('Error creating destination:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
