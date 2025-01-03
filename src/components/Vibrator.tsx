import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export function Vibrator() {
  const [vibrate, setVibrate] = useState<boolean>(false)
  
  useEffect(() => {
    if (vibrate) {
      navigator.vibrate([200, 100, 200])
    } else {
      navigator.vibrate(0)
    }
  }, [vibrate])
  return (
    <Button onClick={() => setVibrate(!vibrate)}>{vibrate ? 'Stop' : 'Vibrate'}</Button>
  )
}
