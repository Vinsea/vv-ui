<template>
  <button :class="['vv-button', `is-${type}`]" :disabled="disabled">
    <vv-ripple :disabled="disabled">
      <div class="vv-button-content">
        <slot></slot>
      </div>
    </vv-ripple>
  </button>
</template>

<script>
import VvRipple from '@vinsea/vv-ui/src/components/VvRipple';

export default {
  name: 'vv-button',
  components: {VvRipple},
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean
  },
};
</script>
