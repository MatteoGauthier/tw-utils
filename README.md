# Tailwind Utils

Recently tailwind v2 was released introcucing preset, this packages provide preset used to fasten your tailwind developpment.

## How to use ?

Install the package

```
yarn add --dev tw-utils
```

Open your `tailwind.config.js` file and put presets of your choice

```js{18}
module.exports = {
	/// Your Config
    presets: [
        require('tw-utils/font/inter')
    ]
	/// Your Config
};
```

## Which utils did you provide ?

| Utils                                      |               Import code               |
| ------------------------------------------ | :-------------------------------------: |
| Inter font import                          |     `require('tw-utils/font/inter)`     |
| Inter font import as display attribute     | `require('tw-utils/font/inter/display)` |
| Full tailwind palette (`full-palette` pkg) |    `require('tw-utils/colors/full)`     |
