// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/client';
import { UserInterface } from '@/types';

const incogres = 'a16e7495-1c21-4629-9aaa-1759e735ad73';
const alcbSystems = '26ef20fa-754e-4c94-9051-15e44c7c0154';

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserInterface[] | Error>
) {
    if (req.method === 'GET') {
        // const { company } = req.body;
        try {
            const data: UserInterface[] = await prisma.user.findMany({
                where: {
                    companyUuid: incogres,
                },
                select: {
                    uuid: true,
                    name: true,
                    email: true,
                    company: {
                        select: {
                            uuid: true,
                            ruc: true,
                            name: true,
                        },
                    },
                    project: {
                        select: {
                            uuid: true,
                            name: true,
                            is_active: true,
                        },
                    },
                },
            });

            return res.status(200).json(data);
        } catch (error: any) {
            return res.status(500).json(error);
        }
    }
}
