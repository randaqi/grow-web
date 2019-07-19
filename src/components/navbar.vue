<template>
  <div class="footer">
    <a-tabs
      :defaultActiveKey="activeKey"
      tabPosition="bottom"
      @change="changeTab"
    >
      <a-tab-pane key="1">
        <span slot="tab">
          <router-link :to="{ name: 'weeklyPlan' }">
            <a-icon type="apple" />
            <p>周计划</p>
          </router-link>
        </span>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <router-link :to="{ name: 'home' }">
            <a-icon type="apple" />
            <p>目标</p>
          </router-link>
        </span>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          <router-link :to="{ name: 'myCenter' }">
            <a-icon type="apple" />
            <p>我的</p>
          </router-link>
        </span>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    activeKey: {
      type: String,
      default: '2',
    },
  },
};
</script>

<style scoped>
.footer {
  z-index: 100;
  background: #f5f5f5;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 5;
  height: 70px;
  margin: 0;
}
.ant-tabs-bottom .ant-tabs-bottom-bar {
  margin-top: 0;
}
</style>
