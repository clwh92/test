<template>
<div>
  <h2>{{ totalInput }}</h2>
  <el-form>
    <el-form-item label="输入框一">
      <el-input v-model="input1" v-limit-num></el-input>
    </el-form-item>
    <el-form-item label="输入框二">
      <el-input v-model="input2" v-limit-num></el-input>
    </el-form-item>
  </el-form>
  <el-button @click="countDown">倒计时</el-button>
  <h2>{{ times }}</h2>
</div>
</template>

<script>
export default {
  name: 'InputDemo',
  data () {
    return {
      input1: '',
      input2: '',
      times: 60,
      totalInput: 0
    }
  },
  methods: {
    countDown () {
      const timer = setInterval(() => {
        this.times--
        if (this.times === 0) {
          clearInterval(timer)
        }
      }, 1000)
    }
  },
  watch: {
    input1: {
      handler: function (newVal) {
        this.totalInput = parseInt(newVal) + parseInt(!this.input2 ? 0 : this.input2)
      }
    },
    input2: {
      handler: function (newVal) {
        this.totalInput = parseInt(newVal) + parseInt(this.input1)
      }
    }
  }
}
</script>

<style scoped>

</style>
