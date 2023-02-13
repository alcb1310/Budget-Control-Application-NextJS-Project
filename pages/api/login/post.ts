// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ErrorInterface } from '@/types';
import getUserByEmail from '@/pages/helpers/users/getUserByEmail';
import { validatePassword } from '@/pages/helpers/validatePassword';
import { user } from '@prisma/client';

type Data = {
    user: user;
};

type LoginInfo = {
    email?: string;
    password?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | ErrorInterface>
) {
    const { method, body } = req;

    if (method === 'POST') {
        const { email, password } = JSON.parse(body);


        if (email === undefined) return res.status(400).json({ errorKey: 'email', errorDescription: 'email is required', errorStatus: 400 });
        if (password === undefined) return res.status(400).json({ errorKey: 'password', errorDescription: 'password is required', errorStatus: 400 });

        const user = await getUserByEmail(email);
        if (user === null) return res.status(401).json({ errorKey: 'email', errorDescription: 'invalid credentials', errorStatus: 401 });

        const isValid = await validatePassword(password, user.password);

        if (isValid === false) return res.status(401).json({ errorKey: 'email', errorDescription: 'invalid credentials', errorStatus: 401 });

        return res.status(200).json({ user });
    }

    res.status(500).json({ errorKey: 'unknown', errorDescription: 'Unknown error', errorStatus: 500 });
}
