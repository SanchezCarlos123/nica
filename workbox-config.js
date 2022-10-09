module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};