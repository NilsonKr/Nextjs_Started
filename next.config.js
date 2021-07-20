/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	async rewrites() {
		return [{ source: '/avocado/:id*', destination: '/product/:id*' }];
	},
};
