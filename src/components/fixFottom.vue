<template>
  <div>
    <router-link to="/">
    <div class="btn">
      <i class="el-icon-arrow-down" />
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'fixFottom'
}
</script>

<style scoped>
  .btn{
    width: 50px;
    height: 20px;
    background: lightgray;
    position: fixed;
    bottom: 0;
    text-align: center;
    border-radius: 5px;
    left: 50%;
    transform: translate(-50%, -0%);
    cursor: pointer;
    z-index: 9999;
  }
</style>
