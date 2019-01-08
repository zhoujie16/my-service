<template>
  <view>
    <view class="">
      <input v-model="userCode" type="text" value="" placeholder="账号" />
    </view>
    <view class="">
      <input v-model="password" type="password" value="" placeholder="密码" />
    </view>
    <view class="">
      <button @tap="registHandleClick" type="primary">注册</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        userCode: 'zhoujie',
        password: 'qwer0926'
      };
    },
    methods: {
      registHandleClick() {
        const {
          userCode,
          password
        } = this
        this.$http.post('/api/user/addUser', {
          userCode,
          password
        }).then(data => {
          console.log(data)
        })
      }
    }
  }
</script>

<style>

</style>
