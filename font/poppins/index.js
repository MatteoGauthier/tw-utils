const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				manrope: ["'Poppins'", "Poppins", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
