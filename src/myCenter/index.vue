<template>
    <div>
        <Header title="个人中心"></Header>
        <a-card class="pic" hoverablestyle="width: 300px">
          <img class="img"
    alt="example"
    src="/imgs/3.jpg"
    slot="cover"
  />
  <a-card-meta
    :title="userInfo.nickname"
    :description="userInfo.description">
  </a-card-meta>
</a-card>
        <Navbar/>
    </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/header.vue';
import Navbar from '../components/navbar.vue';

export default {
  components: {
    Header,
    Navbar,
  },
  data() {
    return {
      userInfo: {
        nickname: 'nickname',
        avator: '',
        description: 'This is my description.',
      },

    };
  },
  methods: {
    getUserInfo() {
      axios({
        method: 'get',
        url: '/users/test',
        timeout: 10000,
      })
        .then((res) => {
          this.userInfo.nickname = res.data.nickname;
          this.userInfo.description = res.data.introduction;
          console.log(res.data.nickname, res.data.introduction);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style>
.pic{
  margin: 0 auto;
  width: 80%;
}
.img{
  border-radius: 50% !important;
}
</style>
