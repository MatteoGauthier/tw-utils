const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Helvetica Neue"', "'Manrope'", "Manrope", ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
