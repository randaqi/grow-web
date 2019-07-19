<template>
    <div>
       <Header title="修改目标"></Header>
        <goal-add :goalData="goalData" :goalType="goalType"></goal-add>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Navbar from '../components/navbar.vue';
import goalAdd from './modules/goal_add.vue';

export default {
  data() {
    return {
      goalData: {
      },
      goalType: 'edit',
    };
  },
  components: {
    Header,
    Navbar,
    goalAdd,
  },
  created() {
    // this.goalData = this.$route.query.goalData;
    this.goalData = this.$route.params.goalData;
  },
};
</script>
