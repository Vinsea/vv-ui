<template>
  <transition name="vv-ripple" @after-enter="end" appear>
    <span v-if="animating"/>
  </transition>
</template>

<script>
export default {
  name: 'vv-wave',
  data() {
    return {
      animating: false
    }
  },
  mounted() {
    this.animating = true;
  },
  methods: {
    end() {
      this.animating = false
      this.$emit('on-end')
    }
  }
}
</script>
