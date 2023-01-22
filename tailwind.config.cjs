/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'blue-shade-1': '#0466C8',
				'blue-shade-2': '#0353A4',
				'blue-shade-3': '#023E7D',
				'blue-shade-4': '#002855',
				'blue-shade-5': '#001845',
				'blue-shade-6': '#001233',
				'gray-shade-1': '#33415C',
				'gray-shade-2': '#5C677D',
				'gray-shade-3': '#7D8597',
				'gray-shade-4': '#979DAC',
			},
		},
	},
	plugins: [],
};
