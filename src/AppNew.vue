<template>
  <div id="appNew">
      准备使用jest
    {{checkCountFn}}
    <div id="table_area">
      <div>
        <table border="1" cellpadding="0" cellspacing="0" width="100%" style="width: calc(100% - 17px)">
          <thead>
          <tr>
            <th width="50" style="border-bottom: none;"><input type="checkbox" class="checkAll" v-model="checkAll" /></th>
            <th style="border-bottom: none;">列标题1</th>
            <th style="border-bottom: none;">列标题2</th>
            <th style="border-bottom: none;">列标题3</th>
          </tr>
          </thead>
        </table>
      </div>
      <div id="tbody_inner">
        <table border="1" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr v-for="(item, index) in tableArr" :key="index">
              <td width="50" style="text-align: center;"><input type="checkbox" class="checkSingle" v-model="item.check" /></td>
              <td v-text="item.label1"></td>
              <td v-text="item.label2"></td>
              <td v-text="item.label3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* Jest的使用 */
export default {
  name: 'AppNew',
  data () {
    return {
      tableArr: [
        {
          index: 1,
          label1: '第1-1列内容',
          label2: '第1-2列内容',
          label3: '第1-3列内容'
        },
        {
          index: 2,
          check: true,
          label1: '第2-1列内容',
          label2: '第2-2列内容',
          label3: '第2-3列内容'
        },
        {
          index: 3,
          label1: '第3-1列内容',
          label2: '第3-2列内容',
          label3: '第3-3列内容'
        },
        {
          index: 4,
          label1: '第4-1列内容',
          label2: '第4-2列内容',
          label3: '第4-3列内容'
        }
      ],
      page: 1
    }
  },
  methods: {
    scrollFn () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this
      const scrollContainer = document.getElementById('tbody_inner')
      // 为该元素添加滚动事件监听器
      scrollContainer.addEventListener('scroll', function () {
        // 当滚动发生时，这里的代码会被执行
        // 获取容器的高度
        const containerHeight = scrollContainer.clientHeight
        // 获取滚动高度
        const scrollTop = scrollContainer.scrollTop
        // 获取滚动区域的总高度
        const scrollHeight = scrollContainer.scrollHeight

        // 检查是否滚动到底部
        const isBottom = scrollTop + containerHeight + 1 >= scrollHeight

        if (isBottom) {
          // 已经滚动到底部，执行相应操作
          console.log('已滚动到底部')
          vm.page++
          console.log(vm.page)
          const arr = []
          for (let i = 0; i < 4; i++) {
            const colIndex = (vm.page - 1) * 4 + i + 1
            arr.push({
              index: colIndex,
              label1: `第${colIndex}-1列内容`,
              label2: `第${colIndex}-2列内容`,
              label3: `第${colIndex}-3列内容`
            })
          }
          vm.tableArr = vm.tableArr.concat(arr)
        } else {
          // console.log('滚动高度scrollTop=' + scrollTop)
        }
      })
    }
  },
  mounted () {
    this.scrollFn()
  },
  watch: {
  },
  computed: {
    checkCountFn () {
      let count = 0
      this.tableArr.map(item => {
        if (item.check) {
          ++count
        }
      })
      return count
    },
    checkAll: {
      get () {
        return (this.checkCountFn === this.tableArr.length)
      },
      set (val) {
        if (!val) {
          this.tableArr.map(item => {
            this.$set(item, 'check', false)
          })
        } else {
          this.tableArr.map(item => {
            this.$set(item, 'check', true)
          })
        }
        return val
      }
    }
  }
}
</script>

<style scoped lang="scss">
 #tbody_inner{
   height: 200px;
   overflow-y: auto;
   table {
     tr{
       height: 50px;
       line-height: 50px;
    }
  }
 }
</style>
