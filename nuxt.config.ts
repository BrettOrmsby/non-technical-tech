export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image-edge"],
  css: [
    "primevue/resources/themes/bootstrap4-dark-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "@/assets/main.css",
  ],
  content: {
    highlight: {
      theme: {
        default: "github-dark",
      },
      preload: ["javascript", "xml", "html", "json"],
    },
  },
  build: {
    transpile: ["primevue"],
  },
});
