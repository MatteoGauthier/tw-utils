const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				manrope: ["'Manrope'", "Manrope", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
