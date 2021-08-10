const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				display: ["'Manrope'", "Manrope", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
