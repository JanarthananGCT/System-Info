import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Bluetooth() {
  const [devices, setDevices] = useState<BluetoothDevice[]>([])
  const [scanning, setScanning] = useState(false)

  const scanForDevices = async () => {
    if (!navigator.bluetooth) {
      console.log('Web Bluetooth API is not available in your browser.')
      return
    }

    setScanning(true)
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      })
      setDevices(prevDevices => [...prevDevices, device])
    } catch (error) {
      console.error('Error scanning for Bluetooth devices:', error)
    }
    setScanning(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bluetooth</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={scanForDevices} disabled={scanning}>
          {scanning ? 'Scanning...' : 'Scan for Devices'}
        </Button>
        {devices.length > 0 && (
          <ul className="mt-4">
            {devices.map((device, index) => (
              <li key={index}>{device.name || 'Unnamed device'}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
