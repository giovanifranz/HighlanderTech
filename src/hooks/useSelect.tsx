import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface SelectContextType {
  select: 'sites' | 'maintenance' | 'mounting'
  setSelect: Dispatch<SetStateAction<'sites' | 'maintenance' | 'mounting'>>
}

interface SelectProviderProps {
  children: ReactNode
}

const initialState: SelectContextType = {
  select: 'sites',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelect: () => {},
}

export const SelectContext = createContext<SelectContextType>(initialState)
export const useSelect = () => useContext(SelectContext)

export function SelectProvider({ children }: SelectProviderProps) {
  const [select, setSelect] = useState<'sites' | 'maintenance' | 'mounting'>('sites')
  return <SelectContext.Provider value={{ select, setSelect }}>{children}</SelectContext.Provider>
}
