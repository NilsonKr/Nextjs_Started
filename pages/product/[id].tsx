import { GetStaticProps, GetStaticPaths } from 'next';

import AvoDescription from '@components/AvoDescription';

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch(`https://platzi-avo.vercel.app/api/avo`);
	const { data: products }: TAPIAvoResponse = await response.json();
	const paths = products.map(p => ({ params: { id: p.id } }));

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async context => {
	const response = await fetch(
		`https://platzi-avo.vercel.app/api/avo/${context.params!.id}`
	);
	const product: TProduct = await response.json();

	return {
		props: { product },
	};
};

const ProductDetails = ({ product }: { product: TProduct }) => {
	return (
		<div>
			{product.id && (
				<>
					<AvoDescription description={product} />
				</>
			)}
		</div>
	);
};

export default ProductDetails;
