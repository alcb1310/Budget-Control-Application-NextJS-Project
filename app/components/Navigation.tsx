import language from '../../language/language.json';

export default function Navigation(): JSX.Element {
	const lang = 'es';
	return (
		<nav className='my-12 mx-36 flex px-5'>
			<h1>logo</h1>
			<ul className='flex px-5 capitalize'>
				<li className='px-5'>
					<a href='/'>{language.menu.transactions[lang]}</a>
				</li>
				<li className='px-5'>
					<a href='/about'>{language.menu.about[lang]}</a>
				</li>
				<li className='px-5'>
					<a href='/companies'>Companies</a>
				</li>
			</ul>
		</nav>
	);
}
