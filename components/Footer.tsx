import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterStyled, ColophonStyled, ReferencesStyled } from './styles/Footer';

const Footer = () => {
	return (
		<FooterStyled>
			<ReferencesStyled>
				<div>
					<a
						target='_blank'
						href='https://github.com/NilsonKr/Nextjs_Started'
						title='Repository'
					>
						Github <FontAwesomeIcon icon={['fab', 'github']} size='1x' />
					</a>
					<a
						target='_blank'
						href='https://twitter.com/Nilson_Kr'
						title='Nilson Diaz Twitter'
					>
						Twitter{' '}
						<FontAwesomeIcon icon={['fab', 'twitter']} size='1x' color='#1da1f2' />
					</a>
				</div>
				<div className='nextjs_course'>
					This Project Belong to Platzi{' '}
					<a href='https://platzi.com/cursos/next/' target='_blank'>
						Next.js Course
					</a>{' '}
					💚
				</div>
			</ReferencesStyled>
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
