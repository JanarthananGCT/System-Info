import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Storage() {
  const [storageUsage, setStorageUsage] = useState<number | null>(null)
  const [storageQuota, setStorageQuota] = useState<number | null>(null)

  useEffect(() => {
    if ('storage' in navigator && 'estimate' in navigator.storage) {

      navigator.storage.estimate().then(({ usage, quota }) => {
          setStorageUsage(usage ?? 0)
          setStorageQuota(quota ?? 0)
      })
    }
  }, [])
  const usagePercentage = (storageUsage ?? 0 / (storageQuota ?? 0)) * 100
  return (
    <Card>
      <CardHeader>
        <CardTitle>Storage</CardTitle>
      </CardHeader>
      <CardContent>
        {usagePercentage !== null ? (
          <>
            <Progress value={usagePercentage} className="w-full" />
            <p className="mt-2">
              {(storageUsage! / (1024 * 1024 * 1024)).toFixed(2)} GB / {(storageQuota! / (1024 * 1024 * 1024)).toFixed(2)} GB
            </p>
          </>
        ) : (
          <p>Storage information not available</p>
        )}
      </CardContent>
    </Card>
  )
}
