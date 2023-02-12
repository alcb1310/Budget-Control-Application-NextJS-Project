export default function Navigation(): JSX.Element {
	return (
		<nav className='my-12 mx-36 flex px-5'>
			<h1>logo</h1>
			<ul className='flex px-5'>
				<li className='px-5'>
					<a href='/'>Home</a>
				</li>
				<li className='px-5'>
					<a href='/about'>About</a>
				</li>
				<li className='px-5'>
					<a href='/companies'>Companies</a>
				</li>
			</ul>
		</nav>
	);
}
