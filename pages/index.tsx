import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import ProductListStyled from '@components/styles/ProductList';

const Home = () => {
	const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		fetch('/api/avo')
			.then(response => response.json())
			.then(({ data }) => setProducts(data));
	}, []);

	return (
		<div className='home_container'>
			<h1> Hello From Next.js ! </h1>
			<ProductListStyled>
				{products.map(product => (
					<Link href={`/product/${product.id}`} key={product.id}>
						<a className='product_link'>
							<h3>{product.name}</h3>
						</a>
					</Link>
				))}
			</ProductListStyled>
			<style jsx>{`
				.home_container {
					width: 100%;
					height: 60vh;
					display: flex;
					flex-flow: column;
					justify-content: space-around;
					align-items: center;
				}

				.product_link {
					display: block;
					margin: 5px 0;
					text-decoration: none;
					color: #15ffb9;
				}
			`}</style>
		</div>
	);
};

export default Home;
