import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { serviceStore } from '@/store/serviceStore'

export function useQuery() {
  const searchParams = useSearchParams()
  const selected = searchParams.get('service')
  const setService = serviceStore((state) => state.setService)

  useEffect(() => {
    if (selected && ['sites', 'maintenance', 'mounting'].includes(selected)) {
      setService(selected as Select)
    }
  }, [selected, setService])
}
