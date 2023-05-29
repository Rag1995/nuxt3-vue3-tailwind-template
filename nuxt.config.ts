// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  typescript: {
    typeCheck: true,
  },
  ssr: process.env.NODE_ENV === 'production',
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  vueuse: {
    autoImports: true,
  },
})
