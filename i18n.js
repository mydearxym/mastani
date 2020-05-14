/*
  Do not copy/paste this code. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require('next-i18next').default
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

// const localeSubpathVariations = {
//   none: {},
//   foreign: {
//     en: 'en',
//   },
//   all: {
//     en: 'en',
//     zh: 'zh',
//   },
// }

module.exports = new NextI18Next({
  debug: false,
  otherLanguages: ['en', 'zh'],
  defaultLanguage: 'zh',
  // lng: 'zh',
  defaultNS: 'home',
  localePath: 'public/locales',
  serverLanguageDetection: true,
  browserLanguageDetection: true,
  localeSubpaths: {
    // zh: 'none', // not not map default locale
    en: 'en',
  },
})
