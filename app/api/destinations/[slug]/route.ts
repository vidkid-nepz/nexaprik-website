import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Destination } from '@/lib/types/Destination';

const dataFilePath = path.join(process.cwd(), 'data', 'destinations.json');

async function getDestinations(): Promise<Destination[]> {
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading destinations file:', error);
        return [];
    }
}

async function saveDestinations(destinations: Destination[]) {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(destinations, null, 4), 'utf-8');
    } catch (error) {
        console.error('Error writing destinations file:', error);
        throw new Error('Failed to save destinations');
    }
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug;
    const destinations = await getDestinations();
    const destination = destinations.find(d => d.slug === slug);

    if (!destination) {
        return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
    }

    return NextResponse.json(destination);
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const slug = (await params).slug;
        const updatedData: Destination = await request.json();
        const destinations = await getDestinations();
        const index = destinations.findIndex(d => d.slug === slug);

        if (index === -1) {
            return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
        }

        // Update destination
        destinations[index] = { ...destinations[index], ...updatedData };
        await saveDestinations(destinations);

        return NextResponse.json(destinations[index]);
    } catch (error) {
        console.error('Error updating destination:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const slug = (await params).slug;
        const destinations = await getDestinations();
        const filteredDestinations = destinations.filter(d => d.slug !== slug);

        if (destinations.length === filteredDestinations.length) {
            return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
        }

        await saveDestinations(filteredDestinations);

        return NextResponse.json({ message: 'Destination deleted successfully' });
    } catch (error) {
        console.error('Error deleting destination:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
