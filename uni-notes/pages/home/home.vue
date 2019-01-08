<template>
  <view>
    <button type="primary" @tap="addNoteHandleClick">添加</button>
    <view class="" v-for="(item,i) in notes" :key="item._id" @tap="noteCellHandleClick(item)" style="padding: 20upx;">
    	{{item.note}}
    </view>
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
        this.$http.post('/api/notes/queryNote').then(res => {
          console.log('查询笔记', res.data)
          this.notes = res.data
        })
      },
      addNoteHandleClick(){
        uni.navigateTo({
        	url: './../note-edit/note-edit',
        	success: res => {},
        	fail: () => {},
        	complete: () => {}
        });
      },
      //进入编辑
      noteCellHandleClick(item){
        uni.navigateTo({
        	url: `./../note-edit/note-edit?_id=${item._id}`,
        	success: res => {},
        	fail: () => {},
        	complete: () => {}
        });
      }
    }
  }
</script>

<style>

</style>
