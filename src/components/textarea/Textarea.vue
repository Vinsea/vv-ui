<template>
  <textarea class="vv-textarea" :class="{'is-autosize':autosize}" :style="{height: this.textareaHeight}"
            :id="id" v-model="localValue"
            @focus="onFocus" @blur="onBlur"
            :aria-label="formItem.label">
  </textarea>
</template>

<script>
import {uuid, calculateContentHeight} from '@vinsea/vv-ui/src/utils/util';

export default {
  name: 'VvTextarea',
  inject: ['formItem'],
  props: {
    value: String,
    id: {
      type: String,
      default: () => 'vvTextarea_' + uuid()
    },
    label: String,
    maxlength: Number,
    required: Boolean,
    autosize: Boolean
  },
  data() {
    return {
      localValue: this.value,
      textareaHeight: 0
    };
  },
  created() {
    this.setValue(this.value);
    this.formItem.id = this.id;
    this.formItem.name = this.$options.name;
    this.formItem.autosize = this.autosize;
  },
  mounted() {
    this.$nextTick().then(this.applyStyles);
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
    },
    getTextAreaLineSize() {
      const style = window.getComputedStyle(this.$el);
      return parseInt(style.lineHeight, 10);
    },
    setTextAreaSize(height) {
      let newHeight = height;

      if (!height) {
        const size = this.getTextAreaLineSize();
        newHeight = calculateContentHeight(this.$el, size);
      }

      this.textareaHeight = newHeight + 'px';
    },
    applyStyles() {
      if (this.autosize) {
        this.setTextAreaSize(40);
        this.$nextTick(() => {
          this.setTextAreaSize();
          window.setTimeout(() => {
            this.$el.style.overflow = 'auto';
          }, 10);
        });
      }
    }
  },
  watch: {
    localValue(val) {
      this.setValue(val);
      this.applyStyles();
      this.$emit('input', val);
    },
    value (val) {
      this.localValue = val
    }
  }
};
</script>
