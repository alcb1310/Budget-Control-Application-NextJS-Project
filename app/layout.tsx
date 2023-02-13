"use client"

import './globals.css';

import { Montserrat } from '@next/font/google';
import { Navigation, Footer } from './components';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-montserrat',
});

interface IProps {
	children: ReactNode;
	session: any
}

export default function RootLayout({
	children,
	session,
}: IProps) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className='font-montserrat'>
				<SessionProvider session={session}>
					<Navigation />
					{children}
					<Footer />
				</SessionProvider>
			</body>
		</html>
	);
}
