import VvTableTd from './VvTableTd';

export default {
  name: 'vv-table-tr',
  props: {
    dataTr: [Object, Array],
    index: Number
  },
  render(h) {
    const tds = [];
    // if (this.$slots && this.$slots.default) {
    //   tds.push(...this.$slots.default);
    // }
    if (this.$parent.$slots.default) {
      for (let td of this.$parent.$slots.default || []) {
        if (td.data) {
          let props = {};
          if (td.componentOptions.propsData) {
            Object.assign(props, td.componentOptions.propsData);
          }
          props.data = this.dataTr;
          props.index = this.index;
          let param = {props};
          if (td.data.scopedSlots) {
            param.scopedSlots = td.data.scopedSlots;
          }
          tds.push(h(VvTableTd, param));
        }
      }
    } else if (!this.$parent.$scopedSlots.default && this.$parent.columns) {
      for (let td of this.$parent.columns || []) {
        let param = JSON.parse(JSON.stringify({props: td}));
        param.props.data = this.dataTr;
        param.props.index = this.index;
        tds.push(h(VvTableTd, param));
      }
    }
    // console.log('tds', tds);
    return h(
      'tr', {
        class: 'vv-table-tr',
        on: {
          click: this.clickHandler
        }
      }, tds
    );
  },
  methods: {
    clickHandler(event) {
      this.$emit('click', this.dataTr, this.index, event);
    }
  }
}
