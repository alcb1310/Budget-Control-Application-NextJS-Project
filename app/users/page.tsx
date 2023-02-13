import { getUsers } from '../helpers/getUsers';
import { getServerSession } from 'next-auth/next';
import {authOptions} from 'pages/api/auth/[...nextauth]';

const incogres = 'a16e7495-1c21-4629-9aaa-1759e735ad73';
const alcbSystems = '26ef20fa-754e-4c94-9051-15e44c7c0154';

export default async function UserPage() {
	const session = await getServerSession(authOptions);

	if (session === null) return <a href='/login'>Sign In</a>;

	const usersData = await getUsers(incogres);

	return (
		<div className='text-xl px-4 text-dark'>
			<h1>Users</h1>
		</div>
	);
}
