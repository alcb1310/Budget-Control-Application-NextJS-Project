import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Email", type: "email", placeholder: "user@mail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials as any;

                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login/post`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: username,
                        password
                    }),
                    headers: { "Content-Type": "application/json" }
                });
                const user = await res.json();

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user.user;
                }
                // Return null if user data could not be retrieved
                return null;
            }
        }),
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: `${process.env.NEXTAUTH_URL}/login`
    }
};

export default NextAuth(authOptions);
