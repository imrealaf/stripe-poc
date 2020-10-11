import Vue from "vue";
import VuetifyFramework from "vuetify/lib/framework";
import Vuetify from "vuetify/lib";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VuetifyFramework);

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    customVariables: ["~/styles/variables.scss"],
  theme: {
    dark: false,
    themes: {
      light: {
      },
    },
  },
  }),
  render: h => h(App)
}).$mount("#app");
