import { shallowMount } from '@vue/test-utils'
import ToDoInput from '../../src/components/header/ToDoInput.vue'

describe('Testing units', () => {
  it('Render', () => {
    const wrapper = shallowMount(ToDoInput, {
      data() {
        return {
          title: "cake",
        }
      }
    })
    expect(wrapper.find('#input').element.value).toEqual('cake')

  })
})