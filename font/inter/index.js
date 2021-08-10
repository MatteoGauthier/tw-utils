const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				inter: ["'Inter'", "Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
