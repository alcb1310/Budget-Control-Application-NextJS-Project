import { CompanyInterface, ErrorInterface } from '@/types';
import prisma from '@/prisma/client';
import getUserByEmail from '@/pages/helpers/users/getUserByEmail';
import { ModuleInterface } from '@/types';

const companyModule: ModuleInterface = {
	name: 'company',
	method: 'get',
};

export async function getCompanies(
	email: string | null | undefined
): Promise<CompanyInterface[] | ErrorInterface> {
	if (email === null || email === undefined)
		return {
			errorStatus: 500,
			errorKey: 'Unknown',
			errorDescription: `Unknown error`,
		};

	const user = await getUserByEmail(email, companyModule);

	if (user === null)
		return {
			errorStatus: 403,
			errorKey: 'Unauthorized',
			errorDescription: `You don't have the authorization to view this resource`,
		};

	const res = await prisma.company.findMany({
		where: {
			uuid: user.companyUuid as string,
		},
	});
	return res;
}
