<template>
    <div>
      <div>
        全屏显示页面
      </div>
      <router-link to="/home">Home页</router-link>
      <router-link to="/about">about页</router-link>
      <router-link to="/router1">router1页</router-link>
      <router-link to="/router2">router2页</router-link>
      <router-view />
      <fixFottom />
    </div>
</template>

<script>
import fixFottom from '@/components/fixFottom'
export default {
  name: 'fullScreen',
  components: {
    fixFottom
  }
}
</script>

<style scoped>

</style>
