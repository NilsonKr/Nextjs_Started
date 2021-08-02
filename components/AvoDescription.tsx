import React, { useState } from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { Context } from '../context/ShopCart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	GeneralDescStyled,
	AddFieldStyled,
	AboutStyled,
	AttributesTableStyled,
} from './styles/AvoDescription';

type AvoProps = {
	description: TProduct;
};

const AvoDescription = ({ description }: AvoProps) => {
	const [quantity, setQuantity] = useState<number | string>('');
	const { addItemToCart } = useContext(Context);

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const target = ev.target;

		if (target.valueAsNumber < 0) {
			return;
		} else {
			setQuantity(target.value);
		}
	};

	return (
		<main>
			<GeneralDescStyled>
				<Image
					blurDataURL={description.image}
					src={description.image}
					alt={description.name}
					width='300px'
					height='300px'
					placeholder='blur'
				/>
				<div className='general_description'>
					<h1>{description.name}</h1>
					<em>${description.price}</em>
					<AddFieldStyled>
						<input
							type='number'
							name='Quantity'
							value={quantity}
							placeholder='0'
							onChange={handleChange}
						/>
						<button
							disabled={!quantity || quantity === '0' ? true : false}
							onClick={() => addItemToCart!(description, Number(quantity))}
						>
							<FontAwesomeIcon icon='shopping-cart' size='1x' /> Add To Cart
						</button>
					</AddFieldStyled>
				</div>
			</GeneralDescStyled>
			<AboutStyled>
				<h2>About</h2>
				<p>{description.attributes.description}</p>
			</AboutStyled>
			<AttributesTableStyled>
				<h2>Hardiness</h2>
				<p>{description.attributes.hardiness}</p>
				<h2>Shape</h2>
				<p>{description.attributes.shape}</p>
				<h2>Taste</h2>
				<p>{description.attributes.taste}</p>
			</AttributesTableStyled>
		</main>
	);
};

export default AvoDescription;
