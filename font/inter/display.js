const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	theme: {
		extend: { display: ["'Inter'", "Inter", ...defaultTheme.fontFamily.sans] },
	},
	fontFamily: {},
};
