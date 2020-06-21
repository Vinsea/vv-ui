export default {
  name: 'VvRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    // 分栏间隔
    gutter: Number,
    // 启用flex布局
    flex: Boolean,
    // flex布局默认左对齐
    justify: {
      type: String,
      default: 'start'
    },
    // flex布局默认居中
    align: {
      type: String,
      default: 'center'
    }
  },

  computed: {
    style() {
      const style = {};
      // gutter 直译为沟，代表网格布局中左右两边留出的空白
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    }
  },

  render(h) {
    let classList = [];
    if (this.flex) {
      classList = [
        'vv-row-flex',
        `is-justify-${this.justify}`,
        `is-align-${this.align}`
      ];
    }
    return h(this.tag, {
      class: ['vv-row', classList],
      style: this.style
    }, this.$slots.default);
  }
};
