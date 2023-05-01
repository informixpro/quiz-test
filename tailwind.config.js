module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Open Sans', 'sans-serif'],
            },
        },
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
				lg: '6rem',
			},
		},
	},
}
