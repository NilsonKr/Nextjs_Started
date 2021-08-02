import React, { useReducer } from 'react';

type TypeContext = {
	cartItems: TCartItem[];
	addItemToCart: (item: TProduct, quantity: number) => void;
};

export const Context = React.createContext<Partial<TypeContext>>({ cartItems: [] });

type ReducerAction = {
	type: 'addItem' | 'removeItem' | 'updateItem';
	payload: any;
};

function shopingCart(state: TCartItem[], action: ReducerAction) {
	switch (action.type) {
		case 'addItem':
			return [...state, action.payload];
		case 'updateItem':
			return action.payload;
		case 'removeItem':
			return [...state];
	}
}

const ShopCart: React.FC = ({ children }) => {
	const [cartItems, setCartItems] = useReducer(shopingCart, []);

	//Add or Update Item Method
	const addItemToCart = (item: TProduct, quantity: number) => {
		const indexOfItem = cartItems.findIndex(
			(cartItem: TCartItem) => item.id === cartItem.id
		);
		const findItemInCart = { ...cartItems[indexOfItem] };

		if (indexOfItem >= 0) {
			const newItems = [...cartItems];

			//Increase quantity And replace in items array
			findItemInCart.quantity = quantity;
			newItems[indexOfItem] = findItemInCart;

			setCartItems({ type: 'updateItem', payload: newItems });
		} else {
			const newItem: TCartItem = { ...item, quantity };

			setCartItems({ type: 'addItem', payload: newItem });
		}
	};

	return (
		<Context.Provider value={{ cartItems, addItemToCart }}>{children}</Context.Provider>
	);
};

export default ShopCart;
