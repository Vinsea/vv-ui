<template>
  <div class="vv-table">
    <table class="vv-table-main">
      <colgroup>
        <col v-for="(col,index) in computeColumns" :key="index+1" :width="col.width">
      </colgroup>
      <thead>
      <tr>
        <th class="vv-table-head" v-for="(th,index) in computeColumns" :key="index+1"
            :style="{'text-align':th.align||'left'}">
          <div class="vv-table-head-content">
            {{th.title}}
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(tr,index) in tableData">
        <vv-table-tr :key="index+1" :index="index" :data-tr="tr" @click="triggerTrClicked">
          <slot :data="tr" :index="index"></slot>
        </vv-table-tr>
        <tr :key="index+'expand'" class="vv-table-tr-expand" v-if="$scopedSlots.expand && tr._expand">
          <td class="vv-table-td-expand" :colspan="columns">
            <slot :data="tr" :index="index" name="expand"></slot>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import VvTableTr from './VvTableTr';

export default {
  name: 'vv-table',
  components: {
    VvTableTr
  },
  data() {
    return {
      computeColumns: []
    }
  },
  props: {
    tableData: Array
  },
  computed: {
    columns() {
      return this.computeColumns.length;
    }
  },
  methods: {
    triggerTrClicked(data) {
      console.log('current-click', data);
    },
    initColumns() {
      const columns = [];
      if (this.$slots.default) {
        for (const slot of this.$slots.default) {
          const option = slot.componentOptions;
          if (option && option.tag === 'vv-table-item') {
            console.log(slot.componentOptions)
            columns.push(slot.componentOptions.propsData);
          }
        }
      }
      this.computeColumns = columns;
    }
  },
  mounted() {
    this.initColumns();
    console.log('$slots', this.$slots.default)
  }
}
</script>
