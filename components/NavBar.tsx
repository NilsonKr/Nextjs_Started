import Link from 'next/link';

import LinkStyled from './styles/NavBar';

const NavBar = () => {
	return (
		<LinkStyled>
			<menu>
				<Link href='/'>
					<a> Home </a>
				</Link>
				<Link href='/about'>
					<a> About </a>
				</Link>
			</menu>
		</LinkStyled>
	);
};

export default NavBar;
