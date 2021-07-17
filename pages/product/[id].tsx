import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const INITIAL_STATE = {
	id: '',
	name: '',
	sku: '',
	price: 0,
	image: '',
	attributes: {
		description: '',
		shape: '',
		hardiness: '',
		taste: '',
	},
};

const ProductDetails = () => {
	const [details, setDetails] = useState<TProduct>(INITIAL_STATE);
	const router = useRouter();
	//Retrieve id of avocado
	const productId = router.query.id;

	useEffect(() => {
		if (productId) {
			fetch(`/api/avo/${productId}`)
				.then(res => res.json())
				.then(data => setDetails(data))
				.catch(err => console.log(err));
		}
	}, [productId]);

	return (
		<div>
			<Link href='/'>
				<a>
					<h1>Back</h1>
				</a>
			</Link>

			{details.id && (
				<>
					<h2>{details.name}</h2>
					<em>$ {details.price}</em>
					<p>{details.attributes.description}</p>
				</>
			)}
		</div>
	);
};

export default ProductDetails;
