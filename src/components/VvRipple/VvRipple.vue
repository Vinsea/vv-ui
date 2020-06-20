<template>
  <div class="vv-ripple"
        @touchstart.passive="touchStartCheck($event)"
        @touchmove.passive="touchMoveCheck($event)"
        @mousedown.passive="startRipple($event)">
    <slot></slot>
    <vv-wave v-for="item in rippleData" :key="item.uuid" :class="['vv-ripple-wave', waveClasses]"
             :style="item.waveStyles" @on-end="clearWave(item.uuid)"></vv-wave>
  </div>
</template>

<script>
import {uuid} from '@vinsea/vv-ui/src/utils/util';

import VvWave from './VvWave'

export default {
  name: 'vv-ripple',
  components: {
    VvWave
  },
  props: {
    center: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      rippleData: [],
      touchTimeout: null
    };
  },
  computed: {
    waveClasses() {
      return {
        'vv-centered': this.center
      }
    }
  },
  methods: {
    touchMoveCheck() {
      window.clearTimeout(this.touchTimeout)
    },
    touchStartCheck($event) {
      this.touchTimeout = window.setTimeout(() => {
        this.startRipple($event)
      }, 100)
    },

    startRipple($event) {
      if (this.disabled) {
        return;
      }
      const {offsetWidth, offsetHeight} = this.$el;
      const size = Math.round(Math.max(offsetWidth, offsetHeight));
      let position = null
      if (this.center) {
        position = this.getCenteredPosition(size)
      } else {
        position = this.getHitPosition($event, size)
      }
      const waveStyles = {
        ...position,
        width: size + 'px',
        height: size + 'px'
      }
      // console.log('waveStyles', waveStyles);
      this.rippleData.push({
        waveStyles,
        uuid: uuid()
      })
    },

    clearWave(uuid) {
      uuid ? this.rippleData = this.rippleData.filter(ripple => ripple.uuid !== uuid) : this.rippleData = []
    },

    getCenteredPosition(size) {
      const halfSize = -size / 2 + 'px'

      return {
        'margin-top': halfSize,
        'margin-left': halfSize
      }
    },

    getHitPosition($event, elementSize) {
      const rect = this.$el.getBoundingClientRect()
      let top = $event.pageY
      let left = $event.pageX

      if ($event.type === 'touchstart') {
        top = $event.changedTouches[0].pageY
        left = $event.changedTouches[0].pageX
      }

      return {
        top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
        left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px'
      }
    }
  }
};
</script>
