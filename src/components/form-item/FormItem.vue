<template>
  <div class="vv-form-item" :class="Classes">
    <label class="vv-form-item-label" :id="formItem.id" v-if="label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'VvFormItem',
  props: {
    label: String,
    required: Boolean
  },
  data() {
    return {
      formItem: {
        id: '',
        name: '',
        value: null,
        focused: false,
        hasValue: false,
        label: this.label,
        autosize: false
      }
    };
  },
  provide() {
    return {
      formItem: this.formItem
    };
  },
  computed: {
    stringValue() {
      return (this.formItem.value || this.formItem.value === 0) && this.formItem.value.toString();
    },
    hasValue() {
      return this.stringValue && this.stringValue.length > 0;
    },
    valueLength() {
      if (this.stringValue) {
        return this.stringValue.length;
      }
      return 0;
    },
    Classes() {
      return {
        'is-focused': this.formItem.focused,
        'has-value': this.hasValue,
        'is-textarea-autosize': this.formItem.autosize,
        'is-textarea-default': this.formItem.name === 'VvTextarea' && !this.formItem.autosize
      };
    }
  },
  methods: {}
};
</script>
