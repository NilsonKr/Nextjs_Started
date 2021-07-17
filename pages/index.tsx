import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
	const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		fetch('/api/avo')
			.then(response => response.json())
			.then(({ data }) => setProducts(data));
	}, []);

	return (
		<div>
			<h1> Hello From Next.js ! </h1>
			<section>
				{products.map(product => (
					<Link href={`/product/${product.id}`} key={product.id}>
						<a>
							<h3>{product.name}</h3>
						</a>
					</Link>
				))}
			</section>
		</div>
	);
};

export default Home;
