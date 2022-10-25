// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  css: [
    "primevue/resources/themes/bootstrap4-dark-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "@/assets/main.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
