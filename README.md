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
		require("tw-utils/font/inter"), // Line to ad
	],
	/// Your Config
};
```

## Which utils did you provide ?

| Utils                                             |                   Import code                   |
| ------------------------------------------------- | :---------------------------------------------: |
| Inter font import                                 |         `require('tw-utils/font/inter)`         |
| Inter font import as display attribute            |     `require('tw-utils/font/inter/display)`     |
| Manrope font import as display attribute          |    `require('tw-utils/font/manrope/display)`    |
| Manrope font import                               |        `require('tw-utils/font/manrope)`        |
| Space Grotesk font import as display attribute    | `require('tw-utils/font/space-grotesk/display)` |
| Space Grotesk font import                         |     `require('tw-utils/font/space-grotesk)`     |
| Full tailwind colors palette (`full-palette` pkg) |        `require('tw-utils/colors/full)`         |
