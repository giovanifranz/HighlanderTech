import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';

interface SelectContextType {
  select: Select;
  setSelect: Dispatch<SetStateAction<Select>>;
}

interface SelectProviderProps {
  children: ReactNode;
}

const initialState: SelectContextType = {
  select: 'sites',
  setSelect: () => null,
};

const SelectContext = createContext<SelectContextType>(initialState);
const useSelect = () => useContext(SelectContext);

function SelectProvider({ children }: SelectProviderProps) {
  const [select, setSelect] = useState<Select>('sites');
  const { query } = useRouter();

  useEffect(() => {
    if (
      typeof query.select === 'string' &&
      ['sites', 'maintenance', 'mounting'].includes(query.select)
    ) {
      setSelect(query.select as Select);
    }
  }, [query]);

  const value = useMemo(() => ({ select, setSelect }), [select, setSelect]);

  return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
}

export { SelectContext, SelectProvider, useSelect };
