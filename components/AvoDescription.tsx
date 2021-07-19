import React, { useState, useRef } from 'react';
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
	const [quantity, setQuantity] = useState<number>(1);
	const { addItemToCart } = useContext(Context);

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		if (ev.target.valueAsNumber < 1 || isNaN(ev.target.valueAsNumber)) {
			return;
		}

		setQuantity(ev.target.valueAsNumber);
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
							onChange={handleChange}
						/>
						<button onClick={() => addItemToCart(description, quantity)}>
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
