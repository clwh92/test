<template>
    <div>
      <el-input v-model="in1" v-required />
      <span v-show="show"> </span>
      <el-row v-for="(obj,index) in types" :key="index">
        <el-col :span="8">
          <el-select v-model="obj.val" placeholder="请选择" @change="select(index)" clearable @clear="cancelSelect(index)">
            <el-option v-for="(item,index1) in typeList" :key="index1" :disabled="item.disabled" :label="item.name" :value="item.type" />
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-input v-model="obj.input1" @blur="blueEvent" />
          <span v-show="show"> </span>
        </el-col>
        <el-col :span="8">
          <el-input v-model="obj.input2" />
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'inputMuti',
  data () {
    return {
      typeList: [
        {
          type: 1,
          name: '选项一'
        },
        {
          type: 2,
          name: '选项二'
        }
      ],
      show: false,
      in1: ''
    }
  },
  computed: {
    types () {
      return this.typeList
    }
  },
  watch: {
    typeList: {
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true
    }
  },
  methods: {
    select ($index) {
      this.$set(this.typeList[$index], 'disabled', true)
    },
    cancelSelect ($index) {
      for (const key in this.typeList) {
        if (this.types[$index].type === this.typeList[key].type) {
          this.$set(this.typeList[$index], 'disabled', false)
        }
      }
    },
    blueEvent (event) {
      let display = 'block'
      const val = event.target.value
      let tip = ''
      if (val.length < 1) {
        tip = '请输入'
      } else if (!/^[1-9]\d*$/.test(val)) {
        tip = '只能输入除0以外的正整数'
      } else {
        display = 'none'
      }
      event.target.parentNode.nextSibling.innerText = tip
      event.target.parentNode.nextSibling.style.display = display
    }
  }
}
</script>

<style scoped>

</style>
