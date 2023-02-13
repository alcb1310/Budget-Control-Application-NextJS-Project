'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';

// export async function getServerSideProps(context: GetServerSidePropsContext) {
// 	const csrfToken = await getCsrfToken(context);
// 	return {
// 		props: { csrfToken },
// 	};
// }

export default function Login() {
	// export default function Login({
	// 	csrfToken,
	// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const [password, setPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	async function handleSubmit(
		event: FormEvent<HTMLFormElement>
	): Promise<void | null> {
		event.preventDefault();
		const userSignIn = await signIn('credentials', {
			email,
			password,
			callbackUrl: `${window.location.origin}/users`,
		});
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
			// method='post'
			// action='/api/auth/signin/credentials'
		>
			<div className='mb-4'>
				<label
					className='block text-labels text-sm font-bold mb-2'
					htmlFor='username'
				>
					Username
				</label>
				<input
					className='shadow appearance-none border border-dark rounded w-full py-2 px-3 text-labels leading-tight focus:outline-none focus:shadow-outline'
					id='username'
					type='text'
					placeholder='Username'
					value={email}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						setEmail(event.target.value)
					}
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-labels text-sm font-bold mb-2'
					htmlFor='password'
				>
					Password
				</label>
				<input
					className='shadow appearance-none border border-dark rounded w-full py-2 px-3 text-labels mb-3 leading-tight focus:outline-none focus:shadow-outline'
					id='password'
					type='password'
					placeholder='your password'
					value={password}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						setPassword(event.target.value)
					}
				/>
			</div>
			<div className='flex items-center justify-between'>
				<button
					className='bg-dark hover:bg-hover text-light font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
					type='submit'
				>
					Sign In
				</button>
				{/* <a
					className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
					href='#'
				>
					Forgot Password?
				</a> */}
			</div>
		</form>
	);
}
