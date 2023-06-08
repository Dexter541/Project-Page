/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{html,js}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
	theme: {
		extend: {
			scale: {
				200: "2.0",
			},
		},
	},
};
