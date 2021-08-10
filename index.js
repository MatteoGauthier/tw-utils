const defaultTheme = require("tailwindcss/defaultTheme")
const fontInterSans = require("./font/inter")
module.exports = {
	theme: {
		fontFamily: {
			...defaultTheme.fontFamily,
			sans: fontInterSans.theme.fontFamily.sans,
		},
	},
}
