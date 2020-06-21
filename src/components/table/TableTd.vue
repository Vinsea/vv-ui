<template>
  <td class="vv-table-td" :style="{'text-align':align}">
    <div class="vv-table-td-content">
      <template v-if="prop">{{show}}</template>
      <template v-else-if="type==='index'">{{index+1}}</template>
      <slot :data="data" :index="index"></slot>
    </div>
  </td>
</template>

<script>
export default {
  name: 'VvTableTd',
  props: {
    index: Number,
    prop: String,
    data: [Object, Array],
    align: String,
    attrs: Function,
    unit: String,
    className: String,
    type: String
  },
  computed: {
    show() {
      return this.data[this.prop];
    }
  }
}
</script>
