import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../components/NavBar';
import ShopCartMock from '../__mocks__/contextMock';

describe('<Navbar />', () => {
	beforeEach(() => {
		render(
			<ShopCartMock>
				<Navbar />
			</ShopCartMock>
		);
	});

	test('Render correctly', () => {
		screen.getByText('Home');
		screen.getByText('About');
	});

	test('Display correct quantity', () => {
		expect(screen.getByText('15')).toBeInTheDocument();
	});
});
