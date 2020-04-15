import Vue from 'vue'
import MessageComponent from './MessageComponent.vue'
import M from 'minimatch'
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
  },
  success(){

  }
}

export{
  Message
}

let _Vue
export default {//写插件的原理
  //默认两个参数，第二个参数是use时候的传参
  install(Vue,options){
    if(!_Vue){//防止多次use
      _Vue = Vue 
      let $message = {}
      Object.keys(Message).forEach(type =>{
        $message[type] = Message[type]
      })
      Vue.prototype.$xrmessage = $message
    }
  }
}