<template>
  <div>
    <el-input v-model="number" @blur="setEndTime" />
    <el-date-picker
      v-model="value1"
      type="date"
      :picker-options="pickerDisabled1"
      placeholder="选择日期">
    </el-date-picker>
    <el-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
      start: '00:30',
      step: '00:15',
      end: '23:59',
      minTime: startTime
    }">
    </el-time-select>
    <el-time-select
      placeholder="结束时间"
      disabled
      v-model="endTime"
      :picker-options="{
      start: '00:30',
      step: '00:15',
      end: '23:59',
      minTime: startTime
    }">
    </el-time-select>
  </div>
</template>

<script>
export default {
  name: 'dataTime',
  created () {
    console.log(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
  },
  data () {
    return {
      value1: new Date(),
      startTime: this.timeFormat(new Date()),
      tempTime: new Date(),
      endTime: '',
      pickerDisabled1: {
        disabledDate: (time) => {
          return time.getTime() < Date.now() - 24 * 3600 * 1000
        }
      },
      number: ''
    }
  },
  methods: {
    timeFormat (date) {
      const hour = date.getHours()
      const minutes = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()
      const second = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds()
      return hour + ':' + minutes + ':' + second
    },
    setEndTime () {
      this.tempTime.setMinutes(parseInt(this.tempTime.getMinutes()) + parseInt(this.number))
      this.endTime = this.timeFormat(this.tempTime)
    }
  }
}
</script>

<style scoped>

</style>
