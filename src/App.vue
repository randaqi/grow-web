<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {

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
  z-index: 100;
  background: #f5f5f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
}
.ant-tabs-bottom .ant-tabs-bottom-bar{
  margin-top:0px;
}

</style>
