import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import AvoDescription from '../../components/AvoDescription';

import ProductMock from '../__mocks__/ProductMock';
import ShopCartMock, { addItemToCart } from '../__mocks__/contextMock';

import '@testing-library/jest-dom/extend-expect';

describe('<AvoDescription />', () => {
	beforeEach(() => {
		render(
			<ShopCartMock>
				<AvoDescription description={ProductMock} />
			</ShopCartMock>
		);
	});

	test('Render Essential Info', () => {
		expect(screen.getByAltText(ProductMock.name)).toBeInTheDocument();
		expect(screen.getByText(ProductMock.name)).toBeInTheDocument();
		expect(screen.getByPlaceholderText('0')).toBeInTheDocument();
	});

	test('onChange Event At Input', () => {
		//Input type number
		const input = screen.getByPlaceholderText('0');

		userEvent.type(input, '2');

		expect(input).toHaveValue(2);

		userEvent.type(input, '{backspace}{del}5');

		expect(input).toHaveValue(5);
	});

	test('add product without quantity', () => {
		const input = screen.getByPlaceholderText('0');
		const buttonAdd = screen.getByText(/add to cart/i);

		fireEvent.click(buttonAdd);

		expect(addItemToCart).not.toHaveBeenCalled();

		userEvent.type(input, '0');

		fireEvent.click(buttonAdd);

		expect(addItemToCart).not.toHaveBeenCalled();
	});

	test('Add new product', () => {
		const input = screen.getByPlaceholderText('0');
		const buttonAdd = screen.getByText(/add to cart/i);
		userEvent.type(input, '4');

		addItemToCart.mockImplementationOnce((item, quantity) => {
			expect(quantity).toBe(4);
		});
		fireEvent.click(buttonAdd);

		expect(addItemToCart).toHaveBeenCalledTimes(1);
	});
});
