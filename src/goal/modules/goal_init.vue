<template>
  <div>
    <!-- <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-tag color="blue">您还未创建任何目标</a-tag>
    </a-form-item> -->
    <div class="card" v-if="goalListVisible">您还未创建任何目标</div>
    <router-link :to="{ name: 'goalAdd' }">
        <a-button class="add-btn" type="primary">
          新建目标
        </a-button>
      </router-link>
    <!-- <a-form-item v-bind="formItemLayoutWithOutLabel">
      <router-link :to="{ name: 'goalAdd' }">
        <a-button type="primary">
          新建目标
        </a-button>
      </router-link>
    </a-form-item> -->
    <!-- <a-form-item v-bind="formItemLayoutWithOutLabel">
      <router-link :to="{ name: 'goalList' }">
       <a-button type="primary">
        查看目标列表
      </a-button>
      </router-link>
    </a-form-item> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      goalListVisible: true,
    };
  },
  created() {
    this.loadObjectData();
  },
  methods: {
    async loadObjectData() {
      const res = await axios.get('/object/objects');
      if (res && res.data.length > 0) {
        this.$router.push('/goalList');
      }
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
.card {
  height: 60%;
  width: 80%;
  margin: 200px auto;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 20px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-text {
  color: gray;
}
</style>
