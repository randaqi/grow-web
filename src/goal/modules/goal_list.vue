<template>
<div class="list_div">
  <a-list
    itemLayout="horizontal"
    :dataSource="data"
    class="demo-list"
  >
    <a-list-item slot="renderItem" slot-scope="item">
      <a slot="actions" @click="editGoal(item)">edit</a>
      <a slot="actions" @click="deleteGoal(item)">delete</a>
      <a-list-item-meta
        :description="getDateRange(item)"
      >
        <a slot="title" @click="viewGoal(item)">
          {{item.description.length > 4 ? `${item.description.slice(0, 4)}...`:item.description}}
          </a>
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
  mounted() {
    this.loadObjectData();
  },
  methods: {
    getDateRange(item) {
      return `${item.beginDate}-${item.endDate}`;
    },
    async loadObjectData() {
      const res = await axios.get('/object/objects');
      this.data = res.data;
    },
    editGoal(item) {
      const deep = this._.cloneDeep(item);
      deep.keyResults = item.keyResults.split(';');
      deep.beginDate = this.$moment(item.beginDate, 'YYYY-MM-DD');
      deep.endDate = this.$moment(item.endDate, 'YYYY-MM-DD');
      // this.$emit('editGoal', deep);
      // this.$router.push({
      //   path: '/goalEdit',
      //   query: {
      //     goalData: deep,
      //   },
      // });
      this.$router.push({ name: 'goalEdit', params: { goalData: deep } });
    },
    viewGoal(item) {
      debugger;
      const deep = this._.cloneDeep(item);
      deep.keyResults = item.keyResults.split(';');
      deep.beginDate = this.$moment(item.beginDate).format('YYYY年MM月DD日');
      deep.endDate = this.$moment(item.endDate).format('YYYY年MM月DD日');
      // this.$emit('viewGoal', deep);
      this.$router.push({ name: 'goalView', params: { goalData: deep } });
    },
    async deleteGoal(item) {
      await axios.delete(`/object/${item.id}`);
      this.loadObjectData();
    },
  },
};
</script>
<style>
.demo-list {
  min-height: 350px;
}
.list_div{
  width: 80%;
  height:100%;
  margin: 10px auto 70px auto;
  overflow:scroll;
}
</style>
