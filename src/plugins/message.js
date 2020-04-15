import Vue from 'vue'
import MessageComponent from './MessageComponent.vue'
//获得组件的一个实例
let getInstance = ()=>{
  //创建一个组件的实例，追加到全局dom中
  let vm = new Vue({
    render: h => h(MessageComponent)
  }).$mount() //挂载到内存当中
  document.body.appendChild(vm.$el)
  //通过$children拿到组件所在的dom
  let component = vm.$children[0]
  return {
    add(option){
      component.add(option)
    }
  }
}
//单例模式
let instance;
let getSingleIns = ()=>{ //返回唯一实例
  instance = instance || getInstance()
  return instance
}

const Message = {
  info(data){
    console.log('message',data)
    getSingleIns().add(data)
  }
}

export{
  Message
}