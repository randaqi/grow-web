<template>
  <div>
    <div class="card" v-if="messageVisible">本周还没有创建过周计划哦</div>
    <a-list class="task-list" itemLayout="horizontal" :dataSource="weekPlan">
      <a-list-item class="list-item" slot="renderItem" slot-scope="item, index">
        <a slot="actions">edit</a>
        <a-list-item-meta
          :description="item.desc"
        >
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <a-button class="add-btn" type="primary" block @click="showModal">新建任务</a-button>

    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p>{{ModalText}}</p>
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      weekPlan: [{
        desc: "?????????????????????????????????????????????????"
      },{
        desc: "!!!"
      }],
      messageVisible: false,
      showAddTaskVisible: false,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  },
  methods: {
    //获取本周周计划
    getCurrentWeeklyPlan() {
      let weekNum = this.getWeekNum();
      axios({
        method: "get",
        url: `http://localhost:8081/weeklyPlans/${weekNum}`,
        timeout: 10000
      })
        .then(res => {
          this.weekPlan = res;
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          if (this.weekPlan === null) {
            this.messageVisible = true;
          } else {
            if (this.weekPlan.length === 0) {
              this.messageVisible = true;
            } else {
              this.messageVisible = false;
            }
          }
        });
    },

    //获取周数
    getWeekNum() {
      // todo
    },

    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  },
  mounted() {
    // this.getCurrentWeeklyPlan();
  }
};
</script>
<style>
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
.task-list {
  min-height: 350px;
}
.list-item{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 90%;
  border-radius: 5px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
}
</style>
