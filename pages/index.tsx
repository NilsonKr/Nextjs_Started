import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Avocado from '@components/SVGIcons/Avocado';

import { ProductsListStyled, ProductItemStyled } from '@components/styles/AvoHome';

const Home = () => {
	const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		fetch('/api/avo')
			.then(response => response.json())
			.then(({ data }) => setProducts(data));
	}, []);

	return (
		<div className='home_container'>
			<h1>
				Time For the Next <Avocado size='50px' style={{ verticalAlign: 'bottom' }} /> !
			</h1>
			<ProductsListStyled>
				{products.map(product => (
					<ProductItemStyled>
						<Link href={`/product/${product.id}`} key={product.id}>
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
