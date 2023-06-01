/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				layout: '#181F2C',
				nav_card: '#1D3750',
			},
		},
	},
	plugins: [],
};
