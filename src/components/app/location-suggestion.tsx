'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Search } from 'lucide-react'
import { useGeolocation } from '@/hooks/use-geolocation'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'

export function LocationSuggestion() {
  const { latitude, longitude, city, error, loading } = useGeolocation()
  const router = useRouter()
  const [showDetails, setShowDetails] = useState(false)

  const handleSearchNearby = () => {
    if (city) {
      router.push(`/trabajos?ubicacion=${encodeURIComponent(city)}`)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-orange-500" />
            <Skeleton className="h-4 w-40" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-orange-500" />
            <span className="text-sm">Ubicación no disponible</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium">
                {city ? `Tu ubicación: ${city}` : 'Ubicación detectada'}
              </span>
            </div>
            {city && (
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-orange-50"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? 'Ocultar' : 'Detalles'}
              </Badge>
            )}
          </div>

          {showDetails && (
            <div className="text-xs text-gray-500 mt-1">
              <p>Latitud: {latitude?.toFixed(4)}</p>
              <p>Longitud: {longitude?.toFixed(4)}</p>
            </div>
          )}

          {city && (
            <Button
              variant="outline"
              size="sm"
              className="mt-2 w-full"
              onClick={handleSearchNearby}
            >
              <Search className="h-4 w-4 mr-2" />
              Buscar trabajos en {city}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
