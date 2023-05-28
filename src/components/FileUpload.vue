<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">打开上传窗口</el-button>
    <el-button type="primary" @click="dialogVisible1 = true">打开上传窗口,手动提交</el-button>
    <el-dialog  title="提示" :visible.sync="dialogVisible1" width="50%" :before-close="handleClose1">
      <el-upload class="upload-demo" ref="upload" drag action="https://jsonplaceholder.typicode.com/posts/"
       accept=".xls,.xlsx" :file-list="fileList1" :multiple="false" :auto-upload="false"  :before-upload="beforeUpload"
       :on-success="successCallBack" :on-error="errorCallBack" :limit="1">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传xls/xlsx</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveFile">上传</el-button>
      </span>
    </el-dialog>
    <el-dialog  title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList" :multiple="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  data () {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      fileList: [],
      fileList1: []
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
      this.fileList = []
      console.log('关闭窗口')
    },
    handleClose1 () {
      this.dialogVisible1 = false
      this.fileList1 = []
      console.log('关闭窗口')
    },
    beforeUpload (file) {
      console.log(file)
    },
    saveFile () {
      this.$refs.upload.submit()
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    successCallBack () {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    errorCallBack () {}
  }
}
</script>

<style scoped>

</style>
