import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import SongItem from '../SongItem.vue'
import { describe } from 'vitest'
import { test } from 'vitest'
import { expect } from 'vitest'

describe('Router', () => {
  test('renders router link', () => {
    const song = {
      docID: 'abc'
    }
    const wrapper = shallowMount(SongItem, {
      props: { song },
      global: {
        components: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: 'song',
      params: { id: song.docID }
    })
  })
})
