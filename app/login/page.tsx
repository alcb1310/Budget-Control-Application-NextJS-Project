'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

export default function Login() {
	const [password, setPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const bodyElement = {
			email,
			password,
		};

		const res = await fetch(`/api/login/post`, {
			method: 'POST',
			body: JSON.stringify(bodyElement),
		});

		if (!res.ok) console.error(res);

		const data = await res.json();
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
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
				<p className='text-red-500 text-xs italic'>Please choose a password.</p>
			</div>
			<div className='flex items-center justify-between'>
				<button
					className='bg-dark hover:bg-hover text-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					type='submit'
				>
					Sign In
				</button>
				<a
					className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
					href='#'
				>
					Forgot Password?
				</a>
			</div>
		</form>
	);
}
