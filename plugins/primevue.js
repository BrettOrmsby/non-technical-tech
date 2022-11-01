import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Chip from "primevue/chip";
import Toolbar from "primevue/toolbar";
import AutoComplete from "primevue/autocomplete";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Chip", Chip);
  nuxtApp.vueApp.component("Toolbar", Toolbar);
  nuxtApp.vueApp.component("AutoComplete", AutoComplete);
});
