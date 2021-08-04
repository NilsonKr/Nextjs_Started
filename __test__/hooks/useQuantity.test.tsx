import { renderHook } from '@testing-library/react-hooks';
import { otherItemsMock } from '../__mocks__/ProductMock';
import '@testing-library/jest-dom/extend-expect';
import useProductsQuantity from '../../hooks/useProductsQuantity';
import ShopCartMock from '../__mocks__/contextMock';

describe('useProductsQuantity Hook', () => {
	test('Render correct quantity', () => {
		const wrapper = ShopCartMock;
		const { result } = renderHook(() => useProductsQuantity(), { wrapper });

		expect(result.current).toBe(15);
	});

	test('Update with new props', () => {
		const wrapper = ShopCartMock;
		const { result, rerender } = renderHook(() => useProductsQuantity(), {
			wrapper,
		});

		expect(result.current).toBe(15);

		rerender({ initialItems: otherItemsMock });

		expect(result.current).toBe(5);
	});
});
