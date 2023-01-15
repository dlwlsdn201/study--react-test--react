const { defaults } = require('jest-config');

module.exports = {
	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest'
	},
	testEnvironment: 'node',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1'
	},
	testMatch: [
		'<rootDir>/**/*.test.(js|jsx|ts|tsx)',
		'<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
	],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleFileExtensions: [...defaults.moduleFileExtensions],
	verbose: true
};
