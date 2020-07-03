<template>
  <input class="vv-input" :id="id"
         v-model="localValue"
         @focus="onFocus"
         @blur="onBlur"
         :aria-label="formItem.label">
</template>

<script>
import {uuid} from '@vinsea/vv-ui/src/utils/util';

export default {
  name: 'VvInput',
  inject: ['formItem'],
  props: {
    value: [String, Number, Array],
    id: {
      type: String,
      default: () => 'vvInput_' + uuid()
    },
    type: {
      type: String,
      default: 'text'
    },
    maxlength: Number,
    required: Boolean
  },
  data() {
    return {
      localValue: this.value
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
  created() {
    this.setValue(this.value);
    this.formItem.id = this.id;
    this.formItem.name = this.$options.name;
  },
  methods: {
    onFocus() {
      this.formItem.focused = true;
    },
    onBlur() {
      this.formItem.focused = false;
    },
    setValue(val) {
      this.formItem.value = val;
    }
  },
  watch: {
    localValue(val) {
      this.setValue(val);
      this.$emit('input', val);
    },
    value(val) {
      this.localValue = val;
    }
  }
};
</script>
