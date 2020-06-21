<template>
  <button
    :class="['vv-button', btnClasses]"
    :disabled="disabled"
    @click="handleClick"
  >
    <vv-ripple :disabled="disabled">
      <div class="vv-button-content">
        <slot></slot>
      </div>
    </vv-ripple>
  </button>
</template>

<script>
import VvRipple from '@vinsea/vv-ui/src/components/ripple';

export default {
  name: 'VvButton',
  components: { VvRipple },
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
  computed: {
    btnClasses() {
      return [
        'is-' + this.type,
        {
          'vv-centered': this.center,
          'is-disabled': this.disabled
        }
      ];
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
