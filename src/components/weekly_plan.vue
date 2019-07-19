<template>
  <div>
    <div class="card" v-if="messageVisible">本周还没有创建过周计划哦</div>
    <div v-if="!messageVisible">
      <p>本周计划完成度:{{this.completionPercent}}</p>
      <a-list class="task-list" itemLayout="horizontal" :dataSource="weekPlan">
        <a-list-item class="list-item" slot="renderItem" slot-scope="item, index">
          <a-list-item-meta class="item-desc" :description="item.desc"></a-list-item-meta>
          <a-switch v-model="item.status" @change="onStatusChange(index)" />
        </a-list-item>
      </a-list>
    </div>
    <a-button class="add-btn" type="primary" block @click="showModal">新建任务</a-button>

    <a-modal
      title="新建任务"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      okText="确认"
      cancelText="取消"
    >
      <a-form class="add_form">
        <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="任务描述">
          <a-textarea
            v-model="task.desc"
            placeholder="请填写任务描述"
            :autosize="{ minRows: 2, maxRows: 6 }"
          />
        </a-form-item>
        <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="所属目标">
          <a-select placeholder="选择目标" @change="handleSelectChange">
            <a-select-option value="1">male</a-select-option>
            <a-select-option value="2">female</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      },
      completionPercent: 0,
      weekPlan: [],
      task: {},
      messageVisible: true,
      showAddTaskVisible: false,
      visible: false,
      confirmLoading: false,
      weekNum: 0,
      objectList: []
    };
  },
  methods: {
    //获取本周周计划
    getCurrentWeeklyPlan() {
      this.getWeekNum();
      axios({
        method: "get",
        url: `/weeklyPlans/${this.weekNum}`,
        timeout: 10000
      })
        .then(res => {
          this.weekPlan = res.data;
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          console.log(this.weekPlan)
          if (this.weekPlan === null) {
            this.messageVisible = true;
          } else {
            if (this.weekPlan.length === 0) {
              this.messageVisible = true;
            } else {
              this.messageVisible = false;
              for (let i = 0, len = this.weekPlan.length; i < len; i++) {
                let completed = 0;
                if (this.weekPlan[i].status === 1) {
                  completed += 1;
                }
                this.completionPercent = completed / len;
                this.completionPercent = this.completionPercent.toFixed(2);
              }
            }
          }
        });
    },

    //获取周数
    getWeekNum() {
      // todo
      this.weekNum = 1;
    },

    async showModal() {
      this.visible = true;

      //获取目标列表
      const res = await axios.get('/object/objects');
      this.objectList = res.data;
      console.log(this.objectList)
    },
    handleOk(e) {
      this.confirmLoading = true;
      this.task.weeklyPlanId = this.weekNum;
      this.task.status = 0;
      const para = Object.assign({}, this.task);
      axios({
        method: "post",
        url: `/tasks`,
        timeout: 10000,
        data: para
      })
        .then(res => {
          this.$message.success("上传成功");
          this.getCurrentWeeklyPlan();
        })
        .catch(err => {
          this.$message.error("上传失败");
        })
        .then(() => {
          this.task = {};
          this.visible = false;
          this.confirmLoading = false;
        });
    },

    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    },

    onStatusChange(index) {
      console.log(index);
      let task = this.weekPlan[index];
      axios({
        method: "put",
        url: `/tasks/${task.id}`,
        timeout: 10000
      })
        .then(res => {
          this.$message.success("修改成功");
        })
        .catch(err => {
          this.$message.error("修改失败");
        })
        .then(() => {
          this.getCurrentWeeklyPlan();
        });
    },
    handleSelectChange(value) {
      console.log(value);
      this.task.objectiveId = parseInt(value);
    }
  },
  mounted() {
    this.getCurrentWeeklyPlan();
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
.list-item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 90%;
  border-radius: 5px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
}
.item-desc {
  width: 80%;
}
</style>
