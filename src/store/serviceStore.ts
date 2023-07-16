import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ServiceStore {
  service: Select
  setService: (service: Select) => void
}

export const serviceStore = create(
  persist<ServiceStore>(
    (set) => ({
      service: 'sites',
      setService: (service: Select) => set({ service }),
    }),
    { name: '@highlander-tech' },
  ),
)
