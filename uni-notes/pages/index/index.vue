<template>
  <view class="content">
    <view class="">
      <input v-model="userCode" type="text" value="" placeholder="账号" />
    </view>
    <view class="">
      <input v-model="password" type="password" value="" placeholder="密码" />
    </view>
    <view class="">
      <button @tap="loginHandleClick" type="primary">登录</button>
      <button @tap="registHandleClick" type="primary">注册</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        userCode: 'zhoujie',
        password:'qwer0926'
      }
    },
    onLoad() {

    },
    methods: {
      loginHandleClick(){
        console.log('登录')
        const {userCode,password} = this
        uni.request({
        	url: 'http://localhost:7001/login',
        	method: 'POST',
        	data: {
            userCode,
            password
          },
        	success: res => {
            console.log(res.data)
            //保存token
            uni.setStorageSync('token', res.data.data.token);
            if(res.data.success){
              //登陆成功
              uni.navigateTo({
              	url: './../home/home',
              	success: res => {},
              	fail: () => {},
              	complete: () => {}
              });
            }
          },
        	fail: (err) => {
            console.log(err)
          },
        	complete: () => {}
        });
      },
      registHandleClick(){
        uni.navigateTo({
        	url: './../regist/regist',
        	success: res => {},
        	fail: () => {},
        	complete: () => {}
        });
      }
    }
  }
</script>

<style type="scss">
  .content{
    padding: 40upx;
  }
   input{
     height: 80upx;
     margin: 40upx 0;
     padding: 0 20upx;
     border: 1upx solid #eee;
   }
</style>
