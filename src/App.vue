<template>
  <div id="app">
    <div class="header">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane :tab="headerTitle" key="1"></a-tab-pane>
      </a-tabs>
    </div>
    <div class="content">
      <goal-init @addGoal="addGoal" v-if="goalInitVisible"></goal-init>
      <goal-add @showGoalList="showGoalList" :goalData="goalData" v-if="goalAddVisible" ></goal-add>
      <goal-list  @editGoal="editGoal" v-if="goalListVisible" ></goal-list>
      <weekly-plan  v-if="weeklyVisible" ></weekly-plan>
    </div>
    <div class="footer">
      <a-tabs defaultActiveKey="2" tabPosition="bottom" @change="changeTab">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="apple" />
            Tab 1
          </span>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="android" />
            Tab 2
          </span>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon type="apple" />
            Tab 3
          </span>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import goalInit from './components/goal_init.vue';
import goalAdd from './components/goal_add.vue';
import goalList from './components/goal_list.vue';
import weeklyPlan from './components/weekly_plan.vue';

export default {
  name: 'app',
  components: {
    goalInit,
    goalAdd,
    goalList,
    weeklyPlan,
  },
  data() {
    return {
      goalInitVisible: true,
      goalAddVisible: false,
      goalListVisible: false,
      weeklyVisible: false,
      headerTitle: '目标',
      goalData: {
        description: null,
        keyResults: ['abc'],
        reason: null,
        statusAndBlock: null,
        waysToCrossBlocks: null,
        beginDate: null,
        endDate: null,
        imgsPath: null,
      },
    };
  },
  methods: {
    addGoal() {
      this.goalInitVisible = false;
      this.goalAddVisible = true;
      this.goalListVisible = false;
      this.headerTitle = '新增目标';
    },
    showGoalList() {
      this.goalInitVisible = false;
      this.goalAddVisible = false;
      this.goalListVisible = true;
      this.headerTitle = '目标列表';
    },
    editGoal(item) {
      this.goalInitVisible = false;
      this.goalAddVisible = true;
      this.goalListVisible = false;
      this.headerTitle = '修改目标';
      this.goalData = item;
    },
    changeTab(activeKey) {
      if (activeKey === '1') {
        this.goalInitVisible = false;
        this.goalAddVisible = false;
        this.goalListVisible = false;
        this.weeklyVisible = true;
      } else if (activeKey === '2') {
        this.goalInitVisible = true;
        this.goalAddVisible = false;
        this.goalListVisible = false;
        this.weeklyVisible = false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
}
</style>
