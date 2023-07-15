import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useQuery() {
  const searchParams = useSearchParams()
  const [service, setService] = useState('sites')

  const selected = searchParams.get('service')

  useEffect(() => {
    if (selected && ['sites', 'maintenance', 'mounting'].includes(selected)) {
      setService(selected)
    }
  }, [selected])

  return { service }
}
