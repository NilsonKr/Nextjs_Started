import React from 'react';
import { useRouter } from 'next/router';

const ProductId = () => {
	const router = useRouter();

	return (
		<div>
			<h1>hey!!!! this is your product id: {router.query.id}</h1>
		</div>
	);
};

export default ProductId;
