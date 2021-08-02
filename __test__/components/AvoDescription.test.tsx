import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import AvoDescription from '../../components/AvoDescription';

import ProductMock from '../__mocks__/ProductMock';
import ShopCartMock from '../__mocks__/contextMock';

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
		expect(screen.getByDisplayValue('1')).toBeInTheDocument();
	});

	test('onChange Event At Input', () => {
		const input = screen.getByDisplayValue('1');

		userEvent.type(input, '2');

		expect(input).toHaveValue(12);
	});
});
