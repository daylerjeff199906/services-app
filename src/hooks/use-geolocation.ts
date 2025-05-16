'use client'

import { useState, useEffect } from 'react'

interface GeolocationState {
  latitude: number | null
  longitude: number | null
  city: string | null
  country: string | null
  error: string | null
  loading: boolean
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    city: null,
    country: null,
    error: null,
    loading: true
  })

  useEffect(() => {
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: 'La geolocalización no está soportada por tu navegador',
        loading: false
      }))
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords

          // Intentar obtener el nombre de la ciudad usando la API de geocodificación inversa
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
          )
          const data = await response.json()

          // Extraer el nombre de la ciudad de la respuesta
          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.municipality ||
            data.address?.state ||
            data.address?.country ||
            data.address?.suburb ||
            null

          setState({
            latitude,
            longitude,
            city,
            error: null,
            country: data.address?.country || null,
            loading: false
          })
        } catch {
          setState((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: 'Error al obtener el nombre de la ciudad',
            loading: false
          }))
        }
      },
      (error) => {
        setState((prev) => ({
          ...prev,
          error: `Error al obtener la ubicación: ${error.message}`,
          loading: false
        }))
      }
    )
  }, [])

  return state
}
