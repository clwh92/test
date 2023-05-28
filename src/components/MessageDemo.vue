<template>
  <div></div>
</template>

<script>
export default {
  name: 'MessageDemo',
  created () {
    this.$message({
      type: 'success',
      message: '这是message提示信息内容',
      onClose: () => {
        console.log('提示信息关闭时的回调函数')
      }
    })
    this.$notify({
      title: '提示',
      message: '信息不自动关闭,信息自动关闭，去除duration属性',
      position: 'bottom-left',
      // duration: 0,
      onClose: () => {
        console.log('notice关闭回调函数')
      }
    })
  }
}
</script>

<style scoped>

</style>
