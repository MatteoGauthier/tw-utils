# Tailwind Utils

Recently tailwind v2 was released introcucing preset, this packages provide preset used to fasten your tailwind developpment.

## How to use ?

Install the package

```
yarn add --dev tw-utils
```

Open your `tailwind.config.js` file and put presets of your choice

```js
module.exports = {
	/// Your Config
	presets: [
		require("tw-utils/font/inter"), // Line to add
	],
	/// Your Config
}
```

## Which utils did you provide ?

| Utils                                                          | Import code                                           |                                           Result class |
| -------------------------------------------------------------- | :---------------------------------------------------- | -----------------------------------------------------: |
| **Inter** font import                                          | `require('tw-utils/font/inter)`                       |                                           `font-inter` |
| **Inter** font import as sans attribute                        | `require('tw-utils/font/inter/sans)`                  |                                            `font-sans` |
| **Inter** font import as display attribute                     | `require('tw-utils/font/inter/display)`               |                                         `font-display` |
| **Inter** font import as sans, fallback of macos fonts         | `require('tw-utils/font/inter/sans-fallback)`         |                                            `font-sans` |
| **Manrope** font import                                        | `require('tw-utils/font/manrope)`                     |                                         `font-manrope` |
| **Manrope** font import as sans attribute                      | `require('tw-utils/font/manrope/sans)`                |                                            `font-sans` |
| **Manrope** font import as display attribute                   | `require('tw-utils/font/manrope/display)`             |                                         `font-display` |
| **Manrope** font import as sans, fallback of macos fonts       | `require('tw-utils/font/manrope/sans-fallback)`       |                                            `font-sans` |
| **Space Grotesk** font import                                  | `require('tw-utils/font/space-grotesk)`               |                                   `font-space-grotesk` |
| **Space Grotesk** font import as display attribute             | `require('tw-utils/font/space-grotesk/sans)`          |                                            `font-sans` |
| **Space Grotesk** font import as display attribute             | `require('tw-utils/font/space-grotesk/display)`       |                                         `font-display` |
| **Space Grotesk** font import as sans, fallback of macos fonts | `require('tw-utils/font/space-grotesk/sans-fallback)` |                                            `font-sans` |
| **Poppins** font import                                        | `require('tw-utils/font/poppins)`                     |                                         `font-poppins` |
| **Poppins** font import as display attribute                   | `require('tw-utils/font/poppins/sans)`                |                                            `font-sans` |
| **Poppins** font import as display attribute                   | `require('tw-utils/font/poppins/display)`             |                                         `font-display` |
| **Poppins** font import as sans, fallback of macos fonts       | `require('tw-utils/font/poppins/sans-fallback)`       |                                            `font-sans` |
| Full tailwind colors palette (`full-palette` pkg)              | `require('tw-utils/colors/full)`                      | [docs](https://github.com/MatteoGauthier/full-palette) |
