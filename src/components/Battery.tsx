import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Battery() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null)
  const [charging, setCharging] = useState<boolean | null>(null)

  useEffect(() => {
    const updateBatteryStatus = (battery: any) => {
      setBatteryLevel(battery.level * 100)
      setCharging(battery.charging)
    }

    navigator.getBattery().then((battery: any) => {
      updateBatteryStatus(battery)
      battery.addEventListener('levelchange', () => updateBatteryStatus(battery))
      battery.addEventListener('chargingchange', () => updateBatteryStatus(battery))
    })
    
  }, [])
  
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Battery</CardTitle>
      </CardHeader>
      <CardContent>
        {batteryLevel !== null ? (
          <>
            <Progress value={batteryLevel} className="w-full" />
            <p className="mt-2">{batteryLevel.toFixed(0)}% {charging ? '(Charging)' : ''}</p>
          </>
        ) : (
          <p>Battery information not available</p>
        )}
      </CardContent>
    </Card>
  )
}
