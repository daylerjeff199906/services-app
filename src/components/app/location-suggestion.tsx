'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Search, RefreshCw } from 'lucide-react'
import { useGeolocation } from '@/hooks/use-geolocation'
import { Skeleton } from '@/components/ui/skeleton'

export function LocationSuggestion() {
  const { city, error, loading, country } = useGeolocation()
  const router = useRouter()

  const handleSearchNearby = () => {
    if (city) {
      router.push(`/trabajos?ubicacion=${encodeURIComponent(city)}`)
    }
  }

  const handleRetry = () => {
    window.location.reload()
  }

  if (loading) {
    return (
      <Card className="overflow-hidden border border-gray-100 shadow-sm rounded-full">
        <CardContent className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-2">
            <div className="bg-orange-100 p-1.5 rounded-full">
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <div className="bg-gray-100 h-10 w-24 rounded-full flex items-center justify-center">
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="overflow-hidden border border-gray-100 shadow-sm rounded-full">
        <CardContent className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-2">
            <div className="bg-gray-100 p-1.5 rounded-full">
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
            <span className="text-sm text-gray-500">
              Ubicación no disponible
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={handleRetry}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border border-orange-100 shadow-md rounded-full hover:shadow-lg transition-all duration-300">
      <CardContent className="px-3 py-0 flex items-center justify-between">
        <div
          className="flex items-center gap-3 pl-2 cursor-pointer group"
          onClick={() => city && handleSearchNearby()}
        >
          <div className="bg-orange-100 p-1.5 rounded-full group-hover:bg-orange-200 transition-colors">
            <MapPin className="h-4 w-4 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                {city || 'Detectando ubicación...'}
              </span>
              {country && (
                <span className="text-xs font-medium px-1.5 py-0.5 bg-orange-50 text-orange-500 rounded-full">
                  {country}
                </span>
              )}
            </div>
            {city && (
              <span className="text-xs text-gray-500">
                Buscar trabajos cerca de ti
              </span>
            )}
          </div>
        </div>

        <Button
          variant="default"
          className="rounded-full bg-orange-500 hover:bg-orange-600 px-4 h-9 shadow-sm"
          onClick={handleSearchNearby}
          disabled={!city}
        >
          <span>Buscar</span>
          <Search className="h-3.5 w-3.5 ml-1.5" />
        </Button>
      </CardContent>
    </Card>
  )
}
