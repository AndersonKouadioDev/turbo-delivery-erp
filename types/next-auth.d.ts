import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            image: string;
            email: string;
            token: string;
            role: string;
        };
    }

    interface User {
        id: string;
        name: string;
        image: string;
        email: string;
        token: string;
        role: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        name: string;
        image: string;
        email: string;
        token: string;
        role: string;
    }
}
