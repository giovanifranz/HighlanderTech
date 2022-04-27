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

const SelectContext = createContext<SelectContextType>(initialState)
const useSelect = () => useContext(SelectContext)

function SelectProvider({ children }: SelectProviderProps) {
  const [select, setSelect] = useState<'sites' | 'maintenance' | 'mounting'>('sites')
  return <SelectContext.Provider value={{ select, setSelect }}>{children}</SelectContext.Provider>
}

export { SelectContext, useSelect, SelectProvider }
