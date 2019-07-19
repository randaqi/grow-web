<template>
<div class="add_div">
  <a-form class="add_form">
    <!-- <div>
      {{goalData}}
    </div> -->
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="目标描述"
    >
      <a-input test="description" v-model="goalData.description" placeholder="比如：瘦成一道闪电" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="关键结果"
    >
    <key-result-tag :keyResults="goalData.keyResults"></key-result-tag>
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="你为什么追求此目标"
    >
      <a-input
       v-model="goalData.reason"
        placeholder="I'm the content is being validated"
      />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="开始日期"
    >
      <a-date-picker v-model="goalData.beginDate" style="width: 100%" />
    </a-form-item>
       <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="结束日期"
    >
      <a-date-picker v-model="goalData.endDate" style="width: 100%" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="现状和障碍"
    >
      <a-input
        v-model="goalData.statusAndBlock"
        placeholder="I'm the content is being validated"
      />
    </a-form-item>
   <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="如何跨越障碍？"
    >
      <a-input
        v-model="goalData.waysToCrossBlocks"
        placeholder="I'm the content is being validated"
      />
    </a-form-item>
    <a-form-item >
      <a-button type="primary" @click="saveGoal" >
        保存
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>
<script>
import axios from 'axios';
import keyResultTag from './key_result_tag.vue';

export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
  },
  components: {
    keyResultTag,
  },
  props: {
    goalData: Object,
    goalType: String,
  },
  methods: {
    async saveGoal() {
      debugger;
      if (this.goalData.keyResults && this.goalData.keyResults.length > 0) {
        this.goalData.keyResults = this.goalData.keyResults.join(';');
      }
      this.goalData.beginDate = this.goalData.beginDate.format('YYYY-MM-DD');
      this.goalData.endDate = this.goalData.endDate.format('YYYY-MM-DD');
      if (this.goalType === 'add') {
        await axios.post('/object/create', this.goalData)
          .then((res) => {
            console.log('res=>', res);
          });
      } else {
        await axios.post('/object/update', this.goalData)
          .then((res) => {
            console.log('res=>', res);
          });
      }
      this.$router.push('/goalList');
    },
  },
};
</script>

<style scoped>
.add_form {
  width: 80%;
  height:100%;
  margin: 5px auto 0 auto;
}
.add_form .ant-form-item{
  margin-bottom: 5px;
}
.add_div{
  margin: 10px auto 70px auto;
  overflow:scroll;
}
</style>
