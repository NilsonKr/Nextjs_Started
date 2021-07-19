import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Avocado from '@components/SVGIcons/Avocado';

import { ProductsListStyled, ProductItemStyled } from '@components/styles/AvoHome';

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('https://platzi-avo.vercel.app/api/avo');
	const { data: ProductList }: TAPIAvoResponse = await response.json();

	return {
		props: { ProductList },
	};
};

const Home = ({ ProductList }: { ProductList: TProduct[] }) => {
	return (
		<div className='home_container'>
			<h1>
				Time For the Next <Avocado size='50px' style={{ verticalAlign: 'bottom' }} /> !
			</h1>
			<ProductsListStyled>
				{ProductList.map(product => (
					<ProductItemStyled key={product.id}>
						<Link href={`/product/${product.id}`}>
							<a>
								<Image
									src={product.image}
									blurDataURL={product.image}
									width='300px'
									height='300px'
									alt={product.name}
									placeholder='blur'
								/>
							</a>
						</Link>
						<div className='description'>
							<h3>{product.name}</h3>
							<em>{product.price}</em>
						</div>
					</ProductItemStyled>
				))}
			</ProductsListStyled>
			<style jsx>{`
				.home_container {
					width: 100%;
					margin-top: 35px;
					display: flex;
					flex-flow: column;
					justify-content: space-around;
					align-items: center;
				}
			`}</style>
		</div>
	);
};

export default Home;
