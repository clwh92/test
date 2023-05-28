<template>
  <div class="" >
    输入框一<el-input v-model="in1" v-required v-limit-num @blur="s1" />
    输入框二<el-input v-model="in2" v-required v-limit-num @blur="s1"/>
  </div>
</template>

<script>
export default {
  name: 'ss',
  data () {
    return {
      in1: '',
      in2: ''
    }
  },
  directives: {
    // 不能为空的指令
    required: {
      inserted: function (el) {
        el.firstElementChild.addEventListener('blur', function () {
          // eslint-disable-next-line eqeqeq
          if (el.firstElementChild.value == '' || el.firstElementChild.value == null) {
            el.firstElementChild.style.border = '1px solid red'
            console.log('我不能为空')
          }
        })
      }
    },
    limitNum: {
      inserted: function (el) {
        el.firstElementChild.addEventListener('blur', function () {
          console.log('失去焦点')
          let display = 'block'
          const val = el.firstElementChild.value
          if (el.lastChild.localName === 'span') {
            el.removeChild(el.lastChild)
          }
          const span = document.createElement('span')
          let tip = ''
          let inputBorderColor = '1px solid red'
          if (val.length < 1) {
            tip = '请输入'
          } else if (!/^[1-9]\d*$/.test(val)) {
            tip = '只能输入除0以外的正整数'
          } else {
            display = 'none'
            inputBorderColor = '1px solid #DCDFE6'
          }
          el.firstElementChild.style.border = inputBorderColor
          span.innerText = tip
          span.style.display = display
          span.style.color = 'red'
          el.appendChild(span)
        })
      }
    }
  },
  methods: {
    s1 () {
      console.log(parseInt(!this.in1 ? 0 : this.in1) + parseInt(!this.in2 ? 0 : this.in2))
    }
  }
}
</script>

<style>

  .input {
    padding-bottom: 20px;
    float: left;
    clear: both;
    margin-left: 500px;
    display: block;

  }

  .check input {
    width: 300px;
    height: 35px;
    outline: none;
    background: #ddd;
  }

  .check span {
    padding-left: 20px;
  }

  .tipsDiv {
    height: 27px;
    line-height: 25px;
    border: 1px solid #333;
    background: #333;
    padding: 0px 5px;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
  }

  .tipsDiv:before {
    content: '';
    display: block;
    border-width: 0 5px 8px;
    border-style: solid;
    border-color: transparent transparent #000;
    position: absolute;
    top: -9px;
    left: 6px;
  }
</style>
