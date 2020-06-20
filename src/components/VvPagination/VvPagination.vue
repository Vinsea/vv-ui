<template>
  <div class="vv-pagination">
    <span> 共 {{total}} 条 </span>
    <span class="vv-pager is-prev" :class="{ 'is-disabled': value === 1 }"
          @click="handleClick('prev')">上一页</span>
    <span class="vv-pager" :class="{ 'is-active': value === 1 }"
          @click="handleClick(1)">1</span>
    <span class="vv-pager is-ellipsis" v-if="pages.length > 0 && 2 < pages[0]">...</span>

    <span
      class="vv-pager"
      v-for="pager in pages"
      :key="pager"
      :class="{ 'is-active': pager === value }"
      @click="handleClick(pager)"
    >{{ pager }}</span>

    <span class="vv-pager is-ellipsis" v-if="pages.length > 0 && pageCount > pages[pages.length-1] + 1">...</span>
    <span class="vv-pager" :class="{ 'is-active': value === pageCount }"
          @click="handleClick(pageCount)">{{ pageCount }}</span>
    <span class="vv-pager is-next" :class="{ 'is-disabled': value === pageCount }"
          @click="handleClick('next')">下一页</span>
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
    },
    size: {
      type: Number,
      default: 5
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.size);
    },

    pages() {
      if (this.pageCount < 3) {
        return []
      }

      let start = Math.max(2, this.value - Math.floor(this.size / 2));
      let end = Math.min(this.pageCount - 1, start + this.size - 1);
      start = Math.min(start, end - this.size + 1);
      start = Math.max(2, start);

      const pagesInner = [];
      for (let i = start; i <= end; i++) {
        pagesInner.push(i);
      }
      return pagesInner;
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
