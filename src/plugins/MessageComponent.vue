<!-- 此组件是根据数据驱动的 -->
<template>
  <div class="222" v-if="messages.length">
      <div class="111" v-for="m in messages">{{m.message}}</div>
  </div>
</template>

<script>
export default {
  name:'xrMessage',
  data(){
    return{
      messages:[],
      id: 0
    }
  },
  methods: {
    add(option){
      let id  = this.id ++
      this.messages.push({...option,id})
      setTimeout(()=>{
        this.messages = this.messages.filter(item => item.id !== id)
      },option.duration)
    }
  },
}
</script>

<style lang="">
  
</style>
