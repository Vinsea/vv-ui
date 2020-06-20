import Vue from "vue";
import App from "./App.vue";

import VvUi from "../../src";
import '../../themes/index.less';

Vue.config.productionTip = false;
Vue.use(VvUi)

new Vue({
  render: h => h(App)
}).$mount("#app");
