import { CompanyInterface } from '@/types';
import prisma from '@/prisma/client';

export async function getCompanies(): Promise<CompanyInterface[]> {
	// const res = await fetch(`${process.env.SERVER}/api/companies/get`);

	// if (!res.ok) console.error(res);

	// return res.json();

	const res = await prisma.company.findMany()
	return res
}
