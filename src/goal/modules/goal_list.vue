<template>
  <div class="list_div">
    <a-list itemLayout="horizontal" :dataSource="data" class="demo-list">
      <a-list-item slot="renderItem" slot-scope="item,index">
        <a slot="actions" @click="editGoal(item)"><a-icon theme="filled" type="edit" /></a>

        <a slot="actions" @click="deleteGoal(item)"><a-icon type="delete" theme="filled" 
        :style="{ color: 'orange' }"/></a>
        <a-list-item-meta :description="getDateRange(item)">
          <a slot="title" @click="viewGoal(item)">
            {{
              item.description.length > 5
                ? `${item.description.slice(0, 4)}...`
                : item.description
            }}
          </a>
          <a-avatar
            slot="avatar"
            :src="imagePath(index)"
          />
        </a-list-item-meta>
        <div :style="restDaysCls(item)">{{ item.restDays }}</div>
      </a-list-item>
    </a-list>
    <router-link :to="{ name: 'goalAdd' }">
      <a-button class="add-btn" type="primary">
        新建目标
      </a-button>
    </router-link>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  created() {},
  mounted() {
    this.loadObjectData();
  },
  methods: {
    imagePath(index) {
      return `/imgs/${index % 5 + 1}.jpg`;
    },
    restDaysCls(item) {
      if (item.restDays <= 7) {
        return { color: 'red', fontSize: '20px' };
      }
      if (item.restDays <= 30) {
        return { color: 'orange', fontSize: '20px' };
      }
      return { color: 'green', fontSize: '20px' };
    },
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
      this.$message.success('删除成功');
    },
  },
};
</script>
<style scoped>
.add-btn {
  position: fixed;
  width: 60%;
  left: 20%;
  right: 20%;
  bottom: 10%;
  z-index: 1000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
}
.list_div {
  width: 80%;
  height: 100%;
  margin: 10px auto 70px auto;
  overflow: scroll;
}
</style>
