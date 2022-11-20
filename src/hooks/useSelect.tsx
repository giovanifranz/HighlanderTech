import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useMemo, useState } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import invariant from 'tiny-invariant';

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

function SelectProvider({ children }: SelectProviderProps) {
  const [select, setSelect] = useState<Select>('sites');

  const value = useMemo(() => ({ select, setSelect }), [select, setSelect]);

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
}

function useSelect() {
  const context = useContextSelector(SelectContext, (context) => context);

  invariant(context !== null, 'useSelect deve ser usado em um SelectProvider');

  return context;
}

export { SelectContext, SelectProvider, useSelect };
