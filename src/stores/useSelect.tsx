import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SelectStore {
  select: Select
  setSelect: (select: Select) => void
}

export const useSelect = create(
  persist<SelectStore>(
    (set) => ({
      select: 'sites',
      setSelect: (select: Select) => set({ select }),
    }),

    { name: '@highlandertech-select' },
  ),
)
