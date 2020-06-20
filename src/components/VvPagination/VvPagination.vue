<template>
  <div class="vv-pagination">
    <span
      class="vv-pager is-prev"
      :class="{ 'is-disabled': value === 1 }"
      @click="handleClick('prev')"
      >上一页</span
    >
    <span
      class="vv-pager"
      v-for="pager in total"
      :key="pager"
      :class="{ 'is-active': pager === value }"
      @click="handleClick(pager)"
      >{{ pager }}</span
    >
    <span
      class="vv-pager is-next"
      :class="{ 'is-disabled': value === total }"
      @click="handleClick('next')"
      >下一页</span
    >
  </div>
</template>

<script>
export default {
  name: 'vv-pagination',
  props: {
    total: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleClick(data) {
      if (this.value === data) return;
      let page = 1;
      if (data === 'prev') {
        if (this.value === 1) return;
        page = this.value - 1;
      } else if (data === 'next') {
        if (this.value === this.total) return;
        page = this.value + 1;
      } else {
        page = data;
      }
      this.$emit('input', page);
      this.$emit('change', page);
    }
  }
};
</script>
