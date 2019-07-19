<template>
    <div>
        <Header title="我的目标"></Header>
        <goal-list></goal-list>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Navbar from '../components/navbar.vue';
import goalList from './modules/goal_list.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Header,
    Navbar,
    goalList,
  },
};
</script>
