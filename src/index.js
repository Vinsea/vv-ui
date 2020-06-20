import * as components from "./components";

const install = Vue => {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "2.12.0",
  install
};
