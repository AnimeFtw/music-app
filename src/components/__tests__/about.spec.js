import AboutView from '@/views/AboutView.vue'
import { shallowMount } from '@vue/test-utils'

import { test, describe, expect } from 'vitest'

describe('AboutView.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(AboutView)

    expect(wrapper.text()).toContain('about')
  })
})
