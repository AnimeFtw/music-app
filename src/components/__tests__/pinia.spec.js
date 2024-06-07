import { setActivePinia, createPinia } from 'pinia'
import useUserStore from '@/stores/user'
import { describe } from 'vitest'
import { beforeEach } from 'vitest'
import { test } from 'vitest'
import { expect } from 'vitest'
import { vi } from 'vitest'

vi.mock('@/includes/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve()
  }
}))

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('authenticates user', async () => {
    const store = useUserStore()

    expect(store.userLoggedIn).not.toBe(true)
    await store.authenticate({})
    expect(store.userLoggedIn).toBe(true)
  })
})
