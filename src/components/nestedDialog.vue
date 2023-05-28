<template>
  <div>
    <div v-if="!show">
      <ul>
        <li>法规资料</li>
        <li>法规管理</li>
      </ul>
      <el-button @click="openDialog">上传</el-button>
      <el-table
        :data="tableData"
        style="width: 100%" @row-click="selectChange">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="上传文件"
      :visible.sync="dialogVisible"
      width="30%" append-to-body>
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <child1 v-if="show" :data="childData"/>
  </div>
</template>

<script>
import child1 from '@/components/ndChildren1'
export default {
  name: 'nestedDialog',
  components: {
    child1
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      dialogVisible: false,
      childData: '',
      show: false
    }
  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    },
    selectChange (row, column, event) {
      this.childData = row.name
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>
