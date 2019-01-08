<template>
	<view>
		<textarea v-model="note" placeholder="" /> 
    <button type="primary" @tap="saveNoteHandleClick">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				note:''
			};
		},
    onLoad(option) {
    	const {_id} = option
      console.log(`onLoad===id=${_id}`)
      if(_id){
        this.queryNote(_id)
      }
    },
    methods:{
      //查询这条数据
      queryNote(_id){
        this.$http.post('/api/notes/queryNote',{_id}).then(res=>{
          console.log(res)
        })
      },
      saveNoteHandleClick(){
        const {note} = this
        this.$http.post('/api/notes/addNote',{
          note
        }).then(res=>{
          uni.showToast({
          	title:'保存成功'
          })
        })
      }
    }
	}
</script>

<style>

</style>
