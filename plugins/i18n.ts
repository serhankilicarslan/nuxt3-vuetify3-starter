import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    locales: [
      { code: 'tr', name: 'Türkçe' },
      { code: 'en', name: 'English' }
    ],
    messages: {
      en: {
        hello: 'Hello, {name}!'
      },
      tr: {
        hello: 'Merhaba, {name}!'
      }
    }
  })

  vueApp.use(i18n)
})