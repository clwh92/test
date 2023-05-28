<template>
  <div>
    <el-tree :data="treeData"  node-key="id" default-expand-all highlight-current :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }" @mouseenter="mouseenter(data)" @mouseleave="mouseleave(data)">
        <span>{{ node.label }}</span>
        <span v-if="node.isLeaf">
          <el-button type="text" v-show="data.show" size="mini"  @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
         <span v-if="!node.isLeaf&&!node.parent.parent">
          <el-button type="text" v-show="data.show"  size="mini"  @click="() => remove(node, data)">
            add
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'ElTreeDemo',
  data () {
    return {
      treeData: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }]
    }
  },
  methods: {
    mouseenter (data) {
      this.$set(data, 'show', true)
    },
    mouseleave (data) {
      this.$set(data, 'show', false)
    },
    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    padding-right: 8px;
  }
</style>
<style>
  .el-tree-node__content {
    height: 40px !important;
  }
  .el-tree-node {
    margin:5px 0px;
  }
  .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    background-color: #3591ff !important;
    border-radius: 5px;
    color: #ffffff;
  }
  .el-tree-node__content:hover {
    background-color: #3591ff !important;
    border-radius: 5px;
    color: #ffffff;
  }
  .el-tree-node__content:hover .el-button {
    color: #ffffff;
  }
</style>
