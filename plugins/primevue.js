import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Chip from "primevue/chip";
import Toolbar from "primevue/toolbar";
import Chips from "primevue/chips";
import InputText from "primevue/inputtext";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Chip", Chip);
  nuxtApp.vueApp.component("Toolbar", Toolbar);
  nuxtApp.vueApp.component("Chips", Chips);
  nuxtApp.vueApp.component("InputText", InputText);
});
