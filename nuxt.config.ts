export default defineNuxtConfig({
  devtools: { enabled: false },
  // ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['UMain', 'UAside', 'UPage'].includes(tag),
    },
  },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxtjs/i18n"
  ],
  ui: {
    icons: ["heroicons", "mdi"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "de",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-blue-50 dark:bg-black min-h-screen",
      },
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  i18n: {
    defaultLocale: "de",
    langDir: "config/locales",
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    lazy: true,
    locales: [
      { code: "en", file: "en.js" },
      { code: "de", file: "de.js" },
    ],
  },
});