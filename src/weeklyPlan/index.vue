<template>
    <div>
        <Header title="周计划"></Header>
        <weekly-plan></weekly-plan>
        <Navbar activeKey="1"/>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Navbar from '../components/navbar.vue';
import weeklyPlan from './modules/weekly_plan.vue';

export default {
  components: {
    Header,
    Navbar,
    weeklyPlan,
  },
};
</script>
