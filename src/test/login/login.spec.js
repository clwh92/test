/*
 * @name: login
 * @auther: 10536
 * @date:2024/5/18 20:24
 * @description:login 登陆验证
 * @update:2024/5/18 20:24
*/
import { shallowMount } from '@vue/test-utils'
import Login from '../../components/privilege/login'

// eslint-disable-next-line no-undef
describe('Login', () => {
  // eslint-disable-next-line no-undef
  it('should display message', () => {
    const wrapper = shallowMount(Login)
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toContain('Hello World')
  })
})
