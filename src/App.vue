<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button @click="showMessage">点我啊</button>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
// import {Message} from './plugins/message.js' //方法一：解构的方式
import Message from './plugins/message.js' //方法一：use
Vue.use(Message,{}) //使用一个插件，内部需要提供一个install方法
export default{
  data(){
    return{

    }
  },
  methods: {
    showMessage(){
      // // 方法一
      // Message.info({
      //   message:'啦啦啦啦',
      //   duration: 3000
      // })
      //方法二
      this.$xrmessage.info({
        message:'啦啦啦啦',
        duration: 3000
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
