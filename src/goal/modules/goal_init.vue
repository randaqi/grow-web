<template>
  <a-form :form="form">
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-tag color="blue">您还未创建任何目标</a-tag>
    </a-form-item>
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <router-link :to="{ name: 'goalAdd' }">
        <a-button type="primary">
          新建目标
        </a-button>
      </router-link>
    </a-form-item>
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <router-link :to="{ name: 'goalList' }">
       <a-button type="primary">
        查看目标列表
      </a-button>
      </router-link>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  methods: {
  },
};
</script>
<style>
</style>
