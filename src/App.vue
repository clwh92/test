<template>
  <div id="app">
    <!-- <ss />
    <input-muti />
    <tre />
    <message />
    <file />
    <input-demo /> -->
    <!--<checkboxGroup />-->
    <!--<data-time />
    <cus-tab></cus-tab>
    <el-button @click="opendDialog">法制资料</el-button>
    <el-dialog title="法制资料" :visible.sync="dialog" width="80%">
      <div>
        <nestedDialog />
      </div>
    </el-dialog>-->
    <video-image />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/router1">路由一</router-link> |
      <router-link to="/router2">路由二</router-link>
      <!--<fullScreen />-->
    </div>
    <router-view />
    <router-view name="help" />
  </div>
</template>
<script>
import tre from './components/ElTreeDemo'
import message from './components/MessageDemo'
import file from './components/FileUpload'
import InputDemo from '@/components/InputDemo'
import InputMuti from '@/components/inputMuti'
import ss from '@/components/s1'
import nestedDialog from '@/components/nestedDialog'
import checkboxGroup from '@/components/checkboxGroup'
import fullScreen from '@/components/fullScreen'
import dataTime from '@/components/dataTime'
import cusTab from '@/components/CustomTab'
import videoImage from '@/components/videoImage'
export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    /* tre,
    message,
    file,
    InputDemo,
    InputMuti,
    ss */
    /* checkboxGroup, */
    /* nestedDialog,
    dataTime,
    cusTab, */
    videoImage
    /* fullScreen */
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    opendDialog () {
      this.dialog = true
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    /* & 代表嵌套规则外层的父元素选择器 */
    &:hover{
      outline-style: dashed;
    }

   /* &.router-link-exact-active {
      color: #42b983;
    }*/
  }
  .router-link-active {
    color: #42b983;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      border-width: 5px;
      border-color: transparent transparent red transparent;
      border-style: solid; //利用伪类使选中路由添加红色三角样式
    }
  }
}
</style>
