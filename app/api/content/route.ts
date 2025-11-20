import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

export async function GET() {
    try {
        const data = await fs.readFile(contentPath, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load content' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await fs.writeFile(contentPath, JSON.stringify(body, null, 4), 'utf-8');
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
    }
}
