import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

interface SelectContextType {
  select: Select;
  setSelect: Dispatch<SetStateAction<Select>>;
}

type SelectProviderProps = {
  children: ReactNode;
};

const initialState: SelectContextType = {
  select: 'sites',
  setSelect: () => null,
};

const SelectContext = createContext<SelectContextType>(initialState);
const useSelect = () => useContext(SelectContext);

function SelectProvider({ children }: SelectProviderProps) {
  const [select, setSelect] = useState<Select>('sites');

  const value = useMemo(() => ({ select, setSelect }), [select, setSelect]);

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}

export { SelectContext, SelectProvider, useSelect };
