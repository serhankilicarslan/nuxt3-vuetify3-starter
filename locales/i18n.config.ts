import en from './langs/en.json'
import tr from './langs/tr.json'
// import router from '../router'

// export default {}

export default {
    // strategy: 'prefix_except_default',
    strategy: 'prefix',
    defaultLocale: 'tr',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        cookieCrossOrigin: true,
        redirectOn: 'root'  // recommended
    },
    locales: [
        { code: 'tr', name: 'Türkçe' },
        { code: 'en', name: 'English' }
    ],
    messages: {
        en,
        tr
    },
    // vueI18n: {
    //     // fallbackLocale: 'tr',
    //     messages: { tr, en },
    // },
    // parsePages: false, //deprecated.
    // customRoutes: router
}