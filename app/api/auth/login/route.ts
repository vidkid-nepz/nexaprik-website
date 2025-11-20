import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        // Credentials from environment variables
        const ADMIN_USER = process.env.ADMIN_USER || "admin";
        const ADMIN_PASS = process.env.ADMIN_PASSWORD || "admin123";

        if (username === ADMIN_USER && password === ADMIN_PASS) {
            // Set a cookie to indicate authentication
            // In a real app, this should be a secure, HTTP-only, signed JWT
            const cookieStore = await cookies();
            cookieStore.set("admin_session", "true", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24, // 1 day
                path: "/",
            });

            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { message: "Invalid username or password" },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred" },
            { status: 500 }
        );
    }
}
