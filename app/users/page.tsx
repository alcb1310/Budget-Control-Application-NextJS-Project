import { getUsers } from '../helpers/getUsers';
// import { useSession } from 'next-auth/react';

const incogres = 'a16e7495-1c21-4629-9aaa-1759e735ad73';
const alcbSystems = '26ef20fa-754e-4c94-9051-15e44c7c0154';

export default async function UserPage() {
	// const { data, status } = useSession();

	// if (status !== 'authenticated') return <a href='#'>Sign in</a>;

	const usersData = await getUsers(incogres);

	return (
		<div className='text-xl px-4 text-dark'>
			<h1>Users</h1>
		</div>
	);
}
