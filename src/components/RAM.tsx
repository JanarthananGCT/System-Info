import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'

export function RAM() {
  const [ramInfo, setRamInfo] = useState<any>('Not available')
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'deviceMemory' in navigator) {
      setRamInfo(navigator.deviceMemory || 'Not available')
    }
  }, [])
    return (
      <Card>
      <CardHeader>
        <CardTitle>RAM</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{typeof ramInfo === 'number' ? `${ramInfo} GB` : ramInfo}</p>
      </CardContent>
    </Card>
  )
}
