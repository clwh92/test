<template>
    <div>
      <children v-if="showPage === '1'" @show="showHandle"/>
      <children2 v-if="showPage === '2'" />
    </div>
</template>

<script>
import children from './children1'
import children2 from './children2'

export default {
  name: 'router1',
  components: {
    children,
    children2
  },
  data () {
    return {
      showPage: '1'
    }
  },
  methods: {
    showHandle (val) {
      this.showPage = val
    }
  },
  beforeRouteLeave (to, from, next) {
    if (from.path === '/router1' && this.showPage === '2') {
      this.$confirm('此操作将提交, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        next()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
        next(false)
      })
    } else {
      next()
    }
  }
}
</script>

<style scoped>

</style>
