<template>
  <div>
    <div>
      <h4>
        这是一个子组件
      </h4>
      <el-select>
        <el-option label="今天"> 今天 </el-option>
        <el-option label="明天"> 明天 </el-option>
        <el-option label="未来"> 未来 </el-option>
      </el-select>
      <el-button type="success" size="mini" @click="changePage"> 进入children2</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'children1',
  methods: {
    changePage () {
      this.$emit('show', '2')
    }
  }
}
</script>

<style scoped>

</style>
