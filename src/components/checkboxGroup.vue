<template>
  <div>
    <el-button @click="getData">获取数据</el-button>
    <div v-for="(item, index) in data1" :key="index">
      {{ data1.value }}
<!--
      <el-checkbox v-for="(obj,index1) in item.lists" :key="index1" :label="index1" @change="changeBox">{{ obj }}</el-checkbox>
-->
      <!--<el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
      </el-checkbox-group>-->
      <el-checkbox-group  v-model="item.value">
        <el-checkbox v-for="(obj,index1) in item.lists" :key="index1" :label="index1">{{ obj }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkboxGroup',
  data () {
    return {
      checkList: [],
      data1: [
        {
          lists: {
            A: '今天',
            B: '明天'
          }
        },
        {
          lists: {
            A: '饭卡扑克牌',
            B: '付款人恐怕'
          }
        }
      ]
    }
  },
  mounted () {
    for (const key in this.data1) {
      this.$set(this.data1[key], 'value', [])
    }
  },
  methods: {
    changeBox (val) {
      console.log('勾选值' + val)
    },
    getData () {
      for (const key in this.data1) {
        console.log('数据' + this.data1[key].value)
      }
    }
  }
}
</script>

<style scoped>

</style>
