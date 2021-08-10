const defaultTheme = require("tailwindcss/defaultTheme")
const fallbackMacOsFonts = require("../../lib/fallback-macos-fonts")
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				display: [...fallbackMacOsFonts, "'Inter'", "Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
