import { NextResponse } from "next/server";
import { readdir, stat, unlink } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public/uploads");

export async function GET() {
    try {
        // Ensure directory exists (or handle error if not)
        try {
            await readdir(UPLOAD_DIR);
        } catch (e) {
            return NextResponse.json({ files: [] });
        }

        const files = await readdir(UPLOAD_DIR);

        const fileStats = await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(UPLOAD_DIR, file);
                const stats = await stat(filePath);
                return {
                    name: file,
                    url: `/uploads/${file}`,
                    size: stats.size,
                    createdAt: stats.birthtime,
                };
            })
        );

        // Sort by newest first
        fileStats.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        return NextResponse.json({ files: fileStats });
    } catch (error) {
        return NextResponse.json(
            { message: "Error listing files" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { filename } = await request.json();
        if (!filename) {
            return NextResponse.json({ message: "Filename required" }, { status: 400 });
        }

        const filePath = path.join(UPLOAD_DIR, filename);
        await unlink(filePath);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { message: "Error deleting file" },
            { status: 500 }
        );
    }
}
