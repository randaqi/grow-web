<template>
    <div>
        <Header title="个人中心"></Header>
        <a-card hoverablestyle="width: 300px">
  <a-card-meta
    :title="userInfo.nickname"
    :description="userInfo.description">
    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  </a-card-meta>
</a-card>
        <Navbar/>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Navbar from '../components/navbar.vue';
import axios from "axios";

export default {
  components: {
    Header,
    Navbar,
  },
  data(){
    return{
      userInfo:{
        nickname:"nickname",
        avator:"",
        description:"This is my description.",
      }
      
    }
  },
  methods:{
    getUserInfo(){
      axios({
        method:"get",
        url:`/users/test`,
        timeout: 10000
      })
      .then(res=>{
        this.userInfo.nickname=res.data.nickname;
        this.userInfo.description=res.data.introduction;
        console.log(res.data.nickname,res.data.introduction);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  created(){
    this.getUserInfo();
  }
};
</script>

<style>
</style>