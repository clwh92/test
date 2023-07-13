<template>
    <div class="customTab">
      <wc-tab>
        <div name="tab1">tab1 content</div>
        <div name="tab2">tab2 content</div>
        <div name="tab3">tab3 content</div>
      </wc-tab>
    </div>
</template>

<script>
/**
* @description web组件，web组件几乎总是启用Shadow Root,其提供一个具有web组件作为其根元素的作用域DOM树，
 *  这使我们能够导入css样式而不污染全局范围，即只在该自定义元素内部生效，任何与组件外部的匹配css都不受影响。
* @user chenwenhua
* @update 2023/7/13
*/
// eslint-disable-next-line @typescript-eslint/class-name-casing
class wcTab extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    console.log('connect')
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const thisNode = this
    const MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const observer = new MutationObserver(function () {
      thisNode.render()
    })
    observer.observe(document.body, { childList: true })
  }

  render () {
    const tabs = this.querySelectorAll('div')
    this.shadowRoot.innerHTML = '<div class="tab-btn-container"></div><div class="tab-panel-container"></div>'
    const btnContainer = this.shadowRoot.querySelector('.tab-btn-container')
    const panelContainer = this.shadowRoot.querySelector('.tab-panel-container')
    this.shadowRoot.appendChild(this.generateStyle())
    for (let i = 0; i < tabs.length; i++) {
      this.addTab(tabs[i], btnContainer, panelContainer, i)
    }
  }

  addTab (tab, btnContainer, panelContainer, index) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const thisNode = this
    const btnTab = document.createElement('button')
    const cloneTab = tab.cloneNode(true)
    const tabName = tab.getAttribute('name')
    if (index === 0) {
      btnTab.setAttribute('class', 'active')
      cloneTab.setAttribute('class', 'active')
    }
    btnTab.setAttribute('name', tabName)
    btnTab.textContent = tabName
    btnContainer.appendChild(btnTab)
    panelContainer.appendChild(cloneTab)
    btnTab.addEventListener('click', function () {
      thisNode.activate(tabName)
    })
  }

  activate (tabName) {
    const tabBtns = this.shadowRoot.querySelectorAll('.tab-btn-container > button')
    const tabPanels = this.shadowRoot.querySelectorAll('.tab-panel-container > div')
    for (let i = 0; i < tabBtns.length; i++) {
      tabBtns[i].classList.remove('active')
      tabPanels[i].classList.remove('active')
    }
    this.shadowRoot.querySelector(`.tab-btn-container > button[name=${tabName}]`).classList.add('active')
    this.shadowRoot.querySelector(`.tab-panel-container > div[name=${tabName}]`).classList.add('active')
  }

  generateStyle () {
    const style = document.createElement('style')
    style.textContent = `
      .tab-btn-container {
        display: flex;
        gap: 7px;
      }
      .tab-btn-container > button {
        background: #58dbd2;
        color: #ffffff;
        padding: 4px 8px;
        border-radius: 8px 8px 0 0;
        cursor: pointer;
        border: 1px solid transparent;
      }
      .tab-btn-container > button.active{
        background: #23d023;
      }
      .tab-panel-container > div{
        display:none;
        padding: 10px 0px;
        text-align: left;
        background: #8797de;
      }
       .tab-panel-container > div.active{
        display:block;
      }
    `
    return style
  }
}
customElements.define('wc-tab', wcTab)
export default {
  name: 'CustomTab'
}
</script>

<style scoped>
.customTab{
  margin: 20px;
}
</style>
