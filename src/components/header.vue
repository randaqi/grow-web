<template>
  <div class="header">
    <h4>{{title}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '目标',
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.header {
  z-index:100;
  background:#F5F5F5;
   border-bottom:1px solid #D3D3D3;
  justify-content: space-around;
  width: 100%;
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    height: 50px;
    margin: 0;
}
.header >h4{
  margin: 15px auto 0px auto;
}
</style>
