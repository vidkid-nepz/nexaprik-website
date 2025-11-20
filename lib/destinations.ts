import fs from 'fs/promises';
import path from 'path';
import { Destination } from '@/lib/types/Destination';

const dataFilePath = path.join(process.cwd(), 'data', 'destinations.json');

export async function getDestinations(): Promise<Destination[]> {
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading destinations file:', error);
        return [];
    }
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
    const destinations = await getDestinations();
    return destinations.find(d => d.slug === slug);
}

export async function getFeaturedDestinations(): Promise<Destination[]> {
    const destinations = await getDestinations();
    return destinations.filter(d => d.featured);
}

export async function saveDestinations(destinations: Destination[]) {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(destinations, null, 4), 'utf-8');
    } catch (error) {
        console.error('Error writing destinations file:', error);
        throw new Error('Failed to save destinations');
    }
}
