<template>
    <div>
      dialog里面的组件
      {{ data }}
      <el-button @click="save">保存</el-button>
    </div>
</template>

<script>
export default {
  name: 'children2',
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  methods: {
    save () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this
      this.$confirm('是否要进行保存操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '保存成功!',
          onClose: function () {
            alert('上一个页面传递的值' + that.data)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
