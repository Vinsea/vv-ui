export default {
  name: 'VvCol',
  props: {
    // 栅格占据的列数 1/24 分栏
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格左侧的间隔格数
    offset: Number
  },

  computed: {

    /**
     * 获取 父组件VvRow的 style，转换为padding
     * @returns {Object} col的style对象
     */
    style() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'VvRow') {
        parent = parent.$parent;
      }
      const style = {};
      if (Object.keys(parent.style).length > 0) {
        style.paddingLeft = parent.style.marginRight.substring(1);
        style.paddingRight = parent.style.marginRight.substring(1);
      }
      return style;
    }
  },
  render(h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(`vv-col-${prop}-${this[prop]}`);
      }
    });

    return h(this.tag, {
      class: ['vv-col', classList],
      style: this.style
    }, this.$slots.default);
  }
};
