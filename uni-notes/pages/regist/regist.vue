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
        uni.request({
          url: 'http://localhost:7001/api/user/addUser',
          method: 'POST',
          data: {
            userCode,
            password
          },
          success: res => {
            console.log(res.data)
            if (res.data.success) {
              console.log(res.data)
            }
          },
          fail: () => {},
          complete: () => {}
        });
      }
    }
  }
</script>

<style>

</style>
