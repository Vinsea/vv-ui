<template>
  <vv-row class="vv-pagination" flex justify="center">
    <div> 共 {{total}} 条</div>

    <div class="vv-pager is-prev" :class="{ 'is-disabled': isFirst }"
         @click="handleClick('prev')">
      <vv-ripple :disabled="isFirst">上一页</vv-ripple>
    </div>

    <div class="vv-pager" :class="{ 'is-active': isFirst }"
         @click="handleClick(1)">
      <vv-ripple center>1</vv-ripple>
    </div>
    <div class="vv-pager is-ellipsis" v-if="pages.length > 0 && 2 < pages[0]">...</div>

    <div
      class="vv-pager"
      v-for="pager in pages"
      :key="pager"
      :class="{ 'is-active': pager === value }"
      @click="handleClick(pager)">
      <vv-ripple center>{{ pager }}</vv-ripple>
    </div>

    <div class="vv-pager is-ellipsis" v-if="pages.length > 0 && pageCount > pages[pages.length-1] + 1">...</div>
    <div class="vv-pager" :class="{ 'is-active': isLast }" v-if="total > 1"
         @click="handleClick(pageCount)">
      <vv-ripple center>{{ pageCount }}</vv-ripple>
    </div>
    <div class="vv-pager is-next" :class="{ 'is-disabled': isLast }"
         @click="handleClick('next')">
      <vv-ripple :disabled="isLast">下一页</vv-ripple>
    </div>
  </vv-row>
</template>

<script>
import VvRipple from '@vinsea/vv-ui/src/components/ripple';
import VvRow from '@vinsea/vv-ui/src/components/row';

export default {
  name: 'VvPagination',
  components: {VvRipple, VvRow},
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
        return [];
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
    },

    isFirst() {
      return this.value === 1;
    },

    isLast() {
      return this.value === this.pageCount;
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
        if (this.value === this.pageCount) return;
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
