import type { NextApiRequest, NextApiResponse } from "next";
import { JWT } from 'next-auth/jwt';
import NextAuth, { Awaitable, RequestInternal, Session, User } from "next-auth";
import { randomBytes, randomUUID } from "crypto";
import CredentialsProvider from 'next-auth/providers/credentials';

// export default NextAuth({
//     callbacks: {
//         session(params: { session: Session, token: JWT, user: User; }) {
//             return params.session; // The return type will match the one returned in `useSession()`
//         },
//     },
//     providers: []
// });

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    // Do whatever you want here, before the request is passed down to `NextAuth`
    return await NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    email: { label: 'Email', type: 'text', placeholder: 'email' },
                    password: { label: 'Password', type: 'password' },
                },
                authorize: async function (credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Promise<User | null> {
                    const baseUrl = process.env.NEXTAUTH_URL;

                    const response = await fetch(
                        `${baseUrl}/api/login/post`,
                        {
                            method: 'POST',
                            body: JSON.stringify(credentials),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }
                    );

                    if (!response.ok) return null;

                    const data: User = await response.json();
                    return data;
                }
            })
        ],
        secret: process.env.SECRET as string,
        session: {
            strategy: 'jwt',
            // Seconds - How long until an idle session expires and is no longer valid.
            maxAge: 24 * 60 * 60, // 1 day
            updateAge: 5 * 60 * 60, // 5 hours
            generateSessionToken: () => {
                return randomUUID?.() ?? randomBytes(32).toString("hex");
            },
        },
        pages: {
            signIn: '/login',
        },
        callbacks: {
            session(params: { session: Session, token: JWT, user: User; }) {
                params.session.user = params.token;
                return params.session; // The return type will match the one returned in `useSession()`
            },
        },
    });
}