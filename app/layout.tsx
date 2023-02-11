import './globals.css';

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className='font-montserrat'>
				{/* <body className={`${montserrat.className}`}> */}
				<nav className='my-12 mx-36 flex px-5'>
					<h1>logo</h1>
					<ul className='flex px-5'>
						<li className='px-5'>
							<a href='/'>Home</a>
						</li>
						<li className='px-5'>
							<a href='/about'>About</a>
						</li>
					</ul>
				</nav>
				{children}
				<footer>made with ❤️ by your friends in alcb1310 systems</footer>
			</body>
		</html>
	);
}
