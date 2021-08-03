import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import Home from '../../pages/index';
import { ProductListMock } from '../__mocks__/ProductMock';

import '@testing-library/jest-dom/extend-expect';

describe('<Home />', () => {
	beforeEach(() => {
		render(<Home ProductList={ProductListMock} />);
	});

	test('Home Render', () => {
		expect(screen.getByText(/Time For the Next/i)).toBeInTheDocument();
	});

	test('Render list of products', () => {
		const products = screen.getAllByLabelText('product');

		expect(products.length).toBe(9);
	});
	test('Correct url and content within a product', () => {
		const mockProduct = ProductListMock[0];
		const product = screen.getAllByLabelText('product')[0];

		expect(product.querySelector('h3')?.textContent).toMatch(mockProduct.name);

		expect(product.querySelector('a')).toHaveAttribute(
			'href',
			`/product/${mockProduct.id}`
		);

		expect(product.querySelector('em')?.textContent).toMatch(/[$]/i);
	});
});
