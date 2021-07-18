import React from 'react';

import { FooterStyled, ColophonStyled } from './styles/Footer';

const Footer = () => {
	return (
		<FooterStyled>
			<ColophonStyled>
				<p className='colophon-entry'>
					Icons made by{' '}
					<a
						target='_blank'
						href='https://www.flaticon.com/authors/freepik'
						title='Freepik'
					>
						Freepik
					</a>
					{' from '}
					<a target='_blank' href='https://www.flaticon.com/' title='Flaticon'>
						www.flaticon.com
					</a>
				</p>
				<p className='colophon-entry'>
					Avocado images taken from{' '}
					<a
						className='acnor'
						target='_blank'
						href='https://www.californiaavocado.com/avocado101/avocado-varieties'
						title='California Avocado'
					>
						Avocado 101
					</a>
					{' at '}
					<a target='_blank' href='https://www.californiaavocado.com' title='Flaticon'>
						California Avocado
					</a>
				</p>
			</ColophonStyled>
		</FooterStyled>
	);
};

export default Footer;
