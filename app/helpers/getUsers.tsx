import { UserInterface } from '@/types';

export async function getUsers(company: string): Promise<UserInterface[]> {
	const res = await fetch(
		`${process.env.SERVER}/api/users/get?company=${company}`,
		{
			method: 'GET',
		}
	);
	if (!res.ok) console.error(res);
	return await res.json();
}
