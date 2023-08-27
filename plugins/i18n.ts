import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import tr from '@/locales/tr.json'

export default defineNuxtPlugin((app) => {
  var defaultLocale = 'tr'
  if (app._route.fullPath == '/en' || app._route.fullPath.indexOf('/en/') == 0)
    defaultLocale = 'en'

  const i18n = createI18n({
    detectBrowserLanguage: false,
    globalInjection: true,
    locale: defaultLocale,
    locales: [
      { code: 'tr', name: 'Türkçe' },
      { code: 'en', name: 'English' }
    ],
    messages: {
      en: en,
      tr: tr,
    }
  })

  app.vueApp.use(i18n)
})