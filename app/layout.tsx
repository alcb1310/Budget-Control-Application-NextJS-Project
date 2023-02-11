import './globals.css';

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
			<body>
				<nav>
					<h1>logo</h1>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
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
