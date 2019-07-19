<template>
    <div>
        <Header title="新增目标"></Header>
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
        id: null,
        description: null,
        keyResults: ['体重减少20kg'],
        reason: null,
        statusAndBlock: null,
        waysToCrossBlocks: null,
        beginDate: this.$moment(new Date(), 'YYYY-MM-DD'),
        endDate: this.$moment(new Date(), 'YYYY-MM-DD'),
        imgsPath: null,
      },
      goalType: 'add',
    };
  },
  components: {
    Header,
    Navbar,
    goalAdd,
  },
};
</script>
