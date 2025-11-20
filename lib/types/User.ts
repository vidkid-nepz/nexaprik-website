export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    role: "super_admin" | "editor" | "viewer";
    fullName: string;
    avatar?: string;
    createdAt: string;
    lastLogin?: string;
    isActive: boolean;
}

export interface AuthUser {
    id: string;
    username: string;
    email: string;
    role: string;
    fullName: string;
}

export interface LoginCredentials {
    username: string;
    password: string;
}
