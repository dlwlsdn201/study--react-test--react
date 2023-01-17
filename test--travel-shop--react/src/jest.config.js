/** @type {import('jest').Config} */
const config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts?$': 'ts-jest'
	},
	transformIgnorePatterns: ['/node_modules/(?!(axios)/)']
};

module.exports = config;
