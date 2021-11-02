const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "{{css_font_name}}": ["'{{css_font_name}}'", "{{css_font_name}}", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
