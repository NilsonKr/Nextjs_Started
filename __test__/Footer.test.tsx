import { render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer';

describe('<Footer /> ', () => {
	beforeEach(() => {
		render(<Footer />);
	});

	test('Footer Rendered', () => {
		const reference = screen.getByText('This Project Belong to Platzi', {
			exact: false,
		}).firstElementChild;

		expect(reference).toHaveAttribute('href', 'https://platzi.com/cursos/next/');
	});

	test('Has Correct Labels', () => {
		const github = screen.getByText('Github');
		const twitter = screen.getByText('Twitter');

		expect(github).toHaveAttribute('href', 'https://github.com/NilsonKr/Nextjs_Started');
		expect(twitter).toHaveAttribute('href', 'https://twitter.com/Nilson_Kr');
	});
});
