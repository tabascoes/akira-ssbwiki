const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')

// i18n
module.exports = withNextra({
  i18n: {
    locales: ['jp', 'en'],
    defaultLocale: 'jp',
  },
})
