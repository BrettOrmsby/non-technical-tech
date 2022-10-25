import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Chip from "primevue/chip";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Chip", Chip);
});
