<template>
  <view>
    {{notes}}
  </view>
</template>

<script>
  export default {
    data() {
      return {
        notes: []
      };
    },
    mounted() {
      this.queryNotes()
    },
    methods: {
      queryNotes() {
        uni.request({
          url: 'http://localhost:7001/api/notes/queryNote',
          method: 'POST',
          data: {
            token: uni.getStorageSync('token')
          },
          success: res => {
            console.log('查询笔记', res.data)
            this.notes = res.data
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
