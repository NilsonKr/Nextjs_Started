import { useContext } from 'react';
import { Context } from '../context/ShopCart';

const useProductsQuantity = (): number => {
	const { cartItems } = useContext(Context);

	const quantity = cartItems!.reduce((prev, current) => current.quantity + prev, 0);

	return quantity;
};

export default useProductsQuantity;
