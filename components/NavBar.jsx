import Link from 'next/link';

const NavBar = () => {
	return (
		<nav>
			<menu>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/About' prefetch={true}>
					<a>About</a>
				</Link>
				<Link href='/product/avocado' prefetch={false}>
					<a>Avocado</a>
				</Link>
			</menu>
		</nav>
	);
};

export default NavBar;
