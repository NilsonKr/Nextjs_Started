import { useContext } from 'react';
import { Context } from '../context/ShopCart';
import Link from 'next/link';

import Basket from './SVGIcons/Basket';
import LinkStyled from './styles/NavBar';

const NavBar = () => {
	const { cartItems } = useContext(Context);

	return (
		<LinkStyled>
			<menu>
				<Link href='/'>
					<a>
						<p>Home</p>
						<div className='underscore--hover'></div>
					</a>
				</Link>
				<Link href='/about'>
					<a>
						<p>About</p>
						<div className='underscore--hover'></div>
					</a>
				</Link>
			</menu>
			<div className='shop_basket'>
				<span>0</span>
				<Basket size='60px' />
			</div>
		</LinkStyled>
	);
};

export default NavBar;
