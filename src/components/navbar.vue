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
            <a-icon type="calendar" />
            <p>周计划</p>
          </router-link>
        </span>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <router-link :to="{ name: 'home' }">
            <a-icon type="hourglass" />
            <p>目标</p>
          </router-link>
        </span>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          <router-link :to="{ name: 'myCenter' }">
           <a-icon type="user" />
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
</style>
