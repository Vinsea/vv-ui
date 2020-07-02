<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br/>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
      >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
          target="_blank"
          rel="noopener"
        >unit-mocha</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
        >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
        >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
        >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
        >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >awesome-vue</a
        >
      </li>
    </ul>
    <div>
      <vv-row>
        <vv-col :span="8">
          <button @click="handleClick">原生</button>
        </vv-col>
        <vv-col :span="12" :offset="4">
          <vv-button @click="handleClick">默认</vv-button>
        </vv-col>
      </vv-row>
    </div>


    <vv-row justify="center">
      <vv-button disabled>禁用</vv-button>
    </vv-row>

    <div style="width: 500px">
      <vv-input required label="姓名" v-model="tableData[0].name"></vv-input>
    </div>

    <vv-pagination :total="1" v-model="currPage"></vv-pagination>
    <vv-table :table-data="tableData">
      <vv-table-item title="#" type="index" width="50" align="center"></vv-table-item>
      <vv-table-item title="姓名" prop="name"></vv-table-item>
      <vv-table-item title="年龄" prop="age"></vv-table-item>
      <vv-table-item title="地址" prop="address"></vv-table-item>
      <vv-table-item title="操作" width="150" align="center">
        <template #default="{data}">
          <vv-button type="text" @click="open(data)">{{data._expand?'收起':'展开'}}</vv-button>
        </template>
      </vv-table-item>
      <template #expand="{data}">
        <pre>{{data}}</pre>
      </template>
    </vv-table>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      currPage: 1,
      tableData: [
        {
          id: 2, name: '测试5', age: 12, address: '上海', _expand: false
        },
        {
          id: 3, name: '测试6', age: 13, address: '上海', _expand: true
        },
        {
          id: 4, name: '测试7测试7测试7测试7测试7', age: 14, address: '上海', _expand: false
        },
        {
          id: 5, name: '测试5', age: 15, address: '上海', _expand: false
        },
        {
          id: 6, name: '测试6', age: 16, address: '上海', _expand: true
        },
        {
          id: 7, name: '测试7', age: 17, address: '上海', _expand: false
        }
      ]
    };
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },

    open(data) {
      this.$set(data, '_expand', !data._expand);
      console.log(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
