import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	testEnvironment: 'jsdom',
	setupFiles: ['<rootDir>/__test__/setupTest.ts'],
	moduleNameMapper: {
		'@components(.*)$': '<rootDir>/components/$1',
	},
};

export default config;
