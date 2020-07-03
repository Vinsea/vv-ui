<template>
  <form class="vv-form">

  </form>
</template>

<script>
import {uuid} from '@vinsea/vv-ui/src/utils/util';

export default {
  name: 'VvForm',
  props: {
    value: String,
    id: {
      type: String,
      default: () => 'vvInput_' + uuid()
    },
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    maxlength: Number,
    required: Boolean
  },
  data() {
    return {
      localValue: this.value,
      focused: false
    };
  },
  computed: {
    // model: {
    //   get () {
    //     return this.localValue
    //   },
    //   set (value) {
    //     if (value.constructor.toString().match(/function (\w*)/)[1].toLowerCase() !== 'inputevent') {
    //       this.$nextTick(() => {
    //         this.localValue = value
    //       })
    //     }
    //   }
    // },
  },
  methods: {
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    }
  },
  watch: {
    localValue(val) {
      this.$emit('input', val);
    },
    // value(val) {
    //   this.localValue = val;
    // }
  }
};
</script>
