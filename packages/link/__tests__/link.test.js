import Element from '../src/link.vue'
import { mount } from '@vue/test-utils'

describe('Lg-Link', () => {
  test('link-href', () => {
    const wrapper = mount(Element, {
      propsData: {
        href: 'http://www.baidu.com'
      }
    })
    expect(wrapper.html()).toContain('href="http://www.baidu.com"')
  })

  test('link-disabled', () => {
    const wrapper = mount(Element, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.attributes('href')).toBe(undefined)
    expect(wrapper.classes('disabled')).toBe(true)
  })

  test('link-underline', () => {
    const wrapper = mount(Element, {
      propsData: {
        underline: true
      }
    })
    expect(wrapper.classes('no-underline')).toBe(false)
  })

})