<template>
<div class="view_div">
  <a-form
    :form="form"
    class="view_form"
  >
    <a-form-item
      label=""
      :wrapper-col="{ span: 12 }"
    >
      <a-row>
        <span style="color:#606062;"
          >从{{goalData.beginDate}}开始</span
        >
      </a-row>
      <a-row>
        <span class="textCls"
          >{{goalData.description}}</span
        >
      </a-row>
      <a-row>
        <span style="color:#606062;"
          >到{{goalData.endDate}}</span
        >
      </a-row>
      <a-row>
        <span style="color:#606062;"
          >当我看到</span
        >
      </a-row>
      <a-row>
        <a-checkbox v-for="item in goalData.keyResults" v-bind:key="item" :checked="true">
          {{item}}</a-checkbox>
      </a-row>
      <a-row>
        <span style="color:#606062;"
          >我就知道我的目标实现了</span
        >
      </a-row>
      <a-row>
        <span style="color:#606062;"
          >我之所以想去实现这个目标，是因为我想</span
        >
      </a-row>
      <a-row>
        <span class="textCls"
          >{{goalData.reason}}</span
        >
      </a-row>
      <a-row>
        <span style="color:#606062;"
          >我知道在实现的过程中可能会</span
        >
      </a-row>
      <a-row>
        <span class="textCls"
          >{{goalData.statusAndBlock}}</span
        >
      </a-row>
      <a-row>
        <span style="color:#606062;"
          >所以我要</span
        >
      </a-row>
      <a-row>
        <span class="textCls"
          >{{goalData.waysToCrossBlocks}}</span
        >
      </a-row>
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12}"
    >
      <a-button
        type="primary"
        @click="viewGoalList"
      >
        返回
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  props: {
    goalData: Object,
  },
  methods: {
    viewGoalList() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.view_form {
  width: 80%;
  height:100%;
  margin: 5px auto 0 auto;
  text-align: left;
}
.add_form .ant-form-item{
  margin-bottom: 5px;
}
.view_div{
  margin: 10px auto 70px auto;
  overflow:scroll;
}
.textCls{
  color:#606062;
  font-weight:bolder;
  white-space:normal;
  word-wrap: break-word;
}
</style>
