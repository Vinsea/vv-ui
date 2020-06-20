import * as components from './components';
import '../themes/index.less';

const install = Vue => {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.2.0',
  install
};
