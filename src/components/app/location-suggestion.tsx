'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Search, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react'
import { useGeolocation } from '@/hooks/use-geolocation'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { motion, AnimatePresence } from 'framer-motion'

export function LocationSuggestion() {
  const { latitude, longitude, city, error, loading } = useGeolocation()
  const router = useRouter()
  const [showDetails, setShowDetails] = useState(false)

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
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-orange-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-orange-500" />
            </div>
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-red-50 to-white">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Ubicación no disponible</p>
                <p className="text-xs text-gray-500 mt-1">
                  No pudimos detectar tu ubicación
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 border-red-200 text-red-600 hover:bg-red-50"
              onClick={handleRetry}
            >
              <RefreshCw className="h-3.5 w-3.5 mr-2" />
              Reintentar
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-orange-50 to-white cursor-pointer"
      onClick={() => city && handleSearchNearby()}
    >
      <CardContent className="p-6">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  {city ? city : 'Ubicación detectada'}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {city
                    ? 'Encontramos trabajos cerca de ti'
                    : 'Buscando tu ubicación...'}
                </p>
              </div>
            </div>

            {city && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-orange-100 transition-colors border-orange-200"
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowDetails(!showDetails)
                      }}
                    >
                      {showDetails ? (
                        <ChevronUp className="h-3.5 w-3.5 mr-1" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5 mr-1" />
                      )}
                      Detalles
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ver coordenadas exactas</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="text-xs text-gray-500 mt-1 p-2 bg-orange-50 rounded-md">
                  <p>Latitud: {latitude?.toFixed(6)}</p>
                  <p>Longitud: {longitude?.toFixed(6)}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {city && (
            <Button
              size="sm"
              className="mt-2 w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white border-none shadow-sm"
              onClick={(e) => {
                e.stopPropagation()
                handleSearchNearby()
              }}
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
