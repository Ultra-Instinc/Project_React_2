/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				basic: "#ffab66",
				basic_hover: "#ff7300",
			},
			fontFamily: {
				cairo: ["Cairo", "sans-serif"],
			},
		},
	},
	plugins: [],
};
