import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import TodoApp from '../src/TodoApp.vue'

test('renders a todo', () => {
  const wrapper = mount(TodoApp)

  const todo = wrapper.get('[data-test="todo"]')

  expect(todo.text()).toBe('Learn Vue.js 3')
})