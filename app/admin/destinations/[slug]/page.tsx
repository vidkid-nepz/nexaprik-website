import { Destination } from '@/lib/types/Destination';
import DestinationForm from '@/components/admin/DestinationForm';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

async function getDestination(slug: string): Promise<Destination | undefined> {
    try {
        const filePath = path.join(process.cwd(), 'data', 'destinations.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const destinations: Destination[] = JSON.parse(fileContent);
        return destinations.find(d => d.slug === slug);
    } catch (error) {
        console.error('Error fetching destination:', error);
        return undefined;
    }
}

export default async function EditDestinationPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const destination = await getDestination(slug);

    if (!destination) {
        notFound();
    }

    return <DestinationForm initialData={destination} isEditMode={true} />;
}
