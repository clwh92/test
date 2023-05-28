<template>
    <div>
      路由嵌套
      <router-link to="/router2/temp1" active-class = "active">嵌套一</router-link> |
      <router-link to="/router2/temp2" active-class = "active">嵌套二</router-link>
      <router-view />
    </div>
</template>

<script>
export default {
  name: 'router1'
}
</script>

<style scoped>
  .active {
    color: #42b983;
  }
</style>
