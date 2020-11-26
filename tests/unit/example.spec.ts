import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Antd from 'ant-design-vue';
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        plugins: [Antd],
      },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
