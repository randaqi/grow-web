<template>
    <div>
        <Header title="目标"></Header>
        <goal-init></goal-init>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Navbar from '../components/navbar.vue';
import goalInit from './modules/goal_init.vue';

export default {
  components: {
    Header,
    Navbar,
    goalInit,
  },
};
</script>
