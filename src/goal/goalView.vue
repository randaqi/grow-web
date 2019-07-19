<template>
    <div>
        <Header title="查看目标"></Header>
        <goal-view :goalData="goalData"></goal-view>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Navbar from '../components/navbar.vue';
import goalView from './modules/goal_view.vue';

export default {
  data() {
    return {
      goalData: {},
    };
  },
  components: {
    Header,
    Navbar,
    goalView,
  },
  created() {
    this.goalData = this.$route.params.goalData;
  },
};
</script>
