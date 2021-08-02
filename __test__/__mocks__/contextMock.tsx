import React from 'react';
import { Context } from '../../context/ShopCart';

const cartItems: TCartItem[] = [
	{
		name: 'Maluma Hass Avocado',
		id: '2zd33b8c',
		sku: 'NUR72KCM',
		price: 1.15,
		image: '/images/maluma.jpg',
		quantity: 5,
		attributes: {
			description:
				'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
			shape: 'Oval',
			hardiness: '1 °C',
			taste: 'Catchy, is an avocado',
		},
	},
	{
		name: 'Fuerte Avocado',
		id: '6trfgkkj',
		sku: 'AX4M8SJV',
		price: 1.21,
		image: '/images/fuerte.jpg',
		quantity: 10,
		attributes: {
			description:
				'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
			shape: 'Pear',
			hardiness: '-1 °C',
			taste: 'Magnificent, is a strong avocado',
		},
	},
];

const ShopCartMock: React.FC = ({ children }) => {
	return <Context.Provider value={{ cartItems }}>{children}</Context.Provider>;
};

export default ShopCartMock;
