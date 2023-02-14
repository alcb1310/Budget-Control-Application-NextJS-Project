import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import language from '../../language/language.json';

export default function Navigation(): JSX.Element {
	const lang = 'es';
	const { data: session } = useSession();

	return (
		<nav className='my-12 mx-36 flex px-5 py-3 bg-dark text-light'>
			<h1>logo</h1>
			<Link className='px-5 capitalize' href='/'>
				{language.menu.transactions[lang]}
			</Link>
			<Link className='px-5 capitalize' href='/about'>
				{language.menu.about[lang]}
			</Link>
			<Link className='px-5 capitalize' href='/companies'>
				Companies
			</Link>
			<div className='ml-auto flex gap-2'>
				{session?.user ? (
					<>
						<p className='text-light'>{session.user.name}</p>
						<button className='text-light' onClick={() => signOut()}>
							Sign Out
						</button>
					</>
				) : (
					<>
						<button className='text-light' onClick={() => signIn()}>
							Sign In
						</button>
					</>
				)}
			</div>
		</nav>
	);
}
