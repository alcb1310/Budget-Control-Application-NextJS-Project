import { CompanyInterface } from '@/types';

export async function getCompanies(): Promise<CompanyInterface[]> {
	const res = await fetch(`${process.env.SERVER}/api/companies/get`);

	if (!res.ok) console.log(res);

	return res.json();
}
