<template>
<div class="list_div">
  <a-list
    itemLayout="horizontal"
    :dataSource="data"
    class="demo-list"
  >
    <a-list-item slot="renderItem" slot-scope="item">
      <a slot="actions" @click="editGoal">edit</a>
      <a slot="actions">delete</a>
      <a-list-item-meta
        description="Ant Design, a design language"
      >
        <a slot="title" href="https://vue.ant.design/">{{item.description}}</a>
        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </a-list-item-meta>
      <div>{{item.restDays}}</div>
    </a-list-item>
  </a-list>
</div>
</template>
<script>
import axios from 'axios';

const data = [
  {
    description: 'Ant Design Title 1',
  },
  {
    description: 'Ant Design Title 2',
  },
  {
    description: 'Ant Design Title 3',
  },
  {
    description: 'Ant Design Title 4',
  },
];
export default {
  data() {
    return {
      data,
    };
  },
  created() {

  },
  async mounted() {
    const res = await axios.get('/object/objects');
    debugger;
    this.data = res.data;
  },
  methods: {
    editGoal() {
      debugger;
      this.$emit('editGoal');
    },
  },
};
</script>
<style>
.demo-list {
  min-height: 350px;
}
.list_div{
  width: 300px;
  height:500px;
  margin: 10px auto 0 auto;
  overflow:scroll;
}
</style>
