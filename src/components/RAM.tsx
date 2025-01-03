import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RAM() {
  const ramInfo = navigator.deviceMemory || 'Not available'

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
