// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';
import { company } from '@prisma/client';

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<company[] | Error>
) {
    if (req.method === 'GET') {
        try {
            const data = await prisma.company.findMany();

            return res.status(200).json(data);
        } catch (error: any) {
            return res.status(500).json(error);
        }
    }
}