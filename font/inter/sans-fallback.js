const defaultTheme = require("tailwindcss/defaultTheme")
const fallbackMacOsFonts = require("../../lib/fallback-macos-fonts")
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
					"'Inter'",
					"Inter",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
}
