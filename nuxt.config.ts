// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['@/assets/scss/global.scss'],

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "@/assets/scss/_vars.scss";
              @import "@/assets/scss/_fonts.scss";
              @import "@/assets/scss/_typography.scss";
            `,
        },
      },
    },
  },
})
