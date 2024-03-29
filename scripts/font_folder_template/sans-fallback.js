const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Helvetica Neue"',
					"'{{css_font_name}}'",
					"{{css_font_name}}",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
}
