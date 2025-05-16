'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Briefcase, Clock, Filter, MapPin, Search } from 'lucide-react'
// import { useAuth } from '@/contexts/auth-context'
import { LocationSuggestion } from '@/components/app/location-suggestion'

export default function TrabajosPage() {
  const router = useRouter()
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const [selectedLocation, setSelectedLocation] = useState('todas')

  // Datos de ejemplo para los trabajos
  const trabajos = [
    {
      id: 1,
      titulo: 'Manicurista para evento de fin de semana',
      categoria: 'Belleza y Cuidado Personal',
      descripcion:
        'Se busca manicurista profesional para evento corporativo. Necesitamos atender a 20 personas durante un evento de 4 horas. Se requiere experiencia en manicura express y diseños sencillos.',
      presupuesto: 800,
      ubicacion: 'Lima, Miraflores',
      fecha: '2023-06-15',
      urgente: true,
      publicado: 'Hace 2 horas',
      imagen:
        'https://547fdc8a.delivery.rocketcdn.me/wp-content/uploads/2022/04/Guia-para-manicurista-curso-de-unas-acrilicas.jpg'
    },
    {
      id: 2,
      titulo: 'Costurera para arreglos de ropa',
      categoria: 'Oficios y Reparaciones',
      descripcion:
        'Necesito una costurera con experiencia para realizar arreglos en varias prendas (pantalones, camisas y vestidos). Se requiere habilidad en ajustes de talla y reparaciones. Trabajo para 2 días.',
      presupuesto: 1200,
      ubicacion: 'Lima, San Isidro',
      fecha: '2023-06-20',
      urgente: false,
      publicado: 'Hace 1 día',
      imagen:
        'https://cimacnoticias.com.mx/wp-content/uploads/2014/09/costureras01_cesarmartinezlopez.jpg'
    },
    {
      id: 3,
      titulo: 'Diseñador gráfico para logo de negocio',
      categoria: 'Servicios Profesionales',
      descripcion:
        'Necesito un diseñador gráfico para crear el logo de mi nuevo negocio de comida. Requiero 3 propuestas y archivos editables.',
      presupuesto: 2500,
      ubicacion: 'Remoto',
      fecha: '2023-06-25',
      urgente: false,
      publicado: 'Hace 3 días',
      imagen:
        'https://e00-xlk-ue-marca.uecdn.es/files/article_828_widen_webp/uploads/2025/03/20/17262558893194.webp'
    },
    {
      id: 4,
      titulo: 'Carpintero para muebles a medida',
      categoria: 'Oficios y Reparaciones',
      descripcion:
        'Necesito un carpintero para fabricar muebles a medida para mi departamento. Se requiere experiencia en muebles modernos.',
      presupuesto: 3500,
      ubicacion: 'Lima, Surco',
      fecha: '2023-06-12',
      urgente: true,
      publicado: 'Hace 5 horas',
      imagen:
        'https://www.habitissimo.es/procenter/wp-content/uploads/2020/07/carpinteros.jpg'
    },
    {
      id: 5,
      titulo: 'Guía turístico para excursión en la selva',
      categoria: 'Turismo y Recreación',
      descripcion:
        'Buscamos guía turístico con experiencia para liderar excursiones de un día en los alrededores de Iquitos. Debe conocer bien la zona, hablar español e inglés básico, y tener conocimientos de primeros auxilios.',
      presupuesto: 1800,
      ubicacion: 'Iquitos, Loreto',
      fecha: '2023-07-10',
      urgente: false,
      publicado: 'Hace 2 días',
      imagen:
        'https://img.freepik.com/foto-gratis/guia-turistica-selva-amazonica-peru_649448-4405.jpg'
    },
    {
      id: 6,
      titulo: 'Cocinero especializado en comida amazónica',
      categoria: 'Gastronomía',
      descripcion:
        'Restaurante en Iquitos busca cocinero con experiencia en platos típicos amazónicos para evento gastronómico de fin de semana. Se valorará conocimiento en preparación de juanes, tacacho con cecina y paiche.',
      presupuesto: 2200,
      ubicacion: 'Iquitos, Loreto',
      fecha: '2023-07-15',
      urgente: true,
      publicado: 'Hace 1 día',
      imagen:
        'https://img.freepik.com/foto-gratis/chef-cocinando-comida-cocina-restaurante_329181-12257.jpg'
    },
    {
      id: 7,
      titulo: 'Artesano para taller de artesanía amazónica',
      categoria: 'Arte y Artesanía',
      descripcion:
        'Centro cultural en Iquitos requiere artesano para impartir taller de artesanía amazónica a turistas. Debe saber trabajar con materiales locales como semillas, fibras naturales y cerámica. Duración: 3 días.',
      presupuesto: 1500,
      ubicacion: 'Iquitos, Loreto',
      fecha: '2023-07-20',
      urgente: false,
      publicado: 'Hace 3 días',
      imagen:
        'https://img.freepik.com/foto-gratis/artesano-trabajando-taller_23-2149552792.jpg'
    }
  ]

//   const handlePostular = () => {
//     // Verificar si el usuario está autenticado
//     if (status !== 'authenticated') {
//       setLoginDialogOpen(true)
//       return
//     }

//     // Verificar si el usuario es trabajador
//     if (user?.role !== 'trabajador') {
//       alert(
//         'Solo los usuarios con rol de trabajador pueden postular a trabajos'
//       )
//       return
//     }

//     // Lógica para postular si está logueado y es trabajador
//     console.log('Usuario trabajador logueado, procesando postulación...')
//   }

  const handleLogin = () => {
    router.push('/login?redirect=trabajos')
  }

  // Filtrar trabajos según los criterios de búsqueda
  const filteredJobs = trabajos.filter((trabajo) => {
    // Filtrar por término de búsqueda
    const matchesSearch =
      searchTerm === '' ||
      trabajo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trabajo.descripcion.toLowerCase().includes(searchTerm.toLowerCase())

    // Filtrar por categoría
    const matchesCategory =
      selectedCategory === 'todas' || trabajo.categoria === selectedCategory

    // Filtrar por ubicación
    const matchesLocation =
      selectedLocation === 'todas' ||
      trabajo.ubicacion.includes(selectedLocation)

    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <>
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Buscador */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar trabajos..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-64">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las categorías" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas las categorías</SelectItem>
                    <SelectItem value="Oficios y Reparaciones">
                      Oficios y Reparaciones
                    </SelectItem>
                    <SelectItem value="Eventos Temporales">
                      Eventos Temporales
                    </SelectItem>
                    <SelectItem value="Servicios a Domicilio">
                      Servicios a Domicilio
                    </SelectItem>
                    <SelectItem value="Servicios Profesionales">
                      Servicios Profesionales
                    </SelectItem>
                    <SelectItem value="Belleza y Cuidado Personal">
                      Belleza y Cuidado Personal
                    </SelectItem>
                    <SelectItem value="Gastronomía">Gastronomía</SelectItem>
                    <SelectItem value="Turismo y Recreación">
                      Turismo y Recreación
                    </SelectItem>
                    <SelectItem value="Arte y Artesanía">
                      Arte y Artesanía
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-64">
                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Cualquier ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Cualquier ubicación</SelectItem>
                    <SelectItem value="Lima">Lima</SelectItem>
                    <SelectItem value="Iquitos">Iquitos</SelectItem>
                    <SelectItem value="Arequipa">Arequipa</SelectItem>
                    <SelectItem value="Trujillo">Trujillo</SelectItem>
                    <SelectItem value="Remoto">Remoto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Buscar</Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filtros y ubicación */}
            <div className="w-full lg:w-64 shrink-0 space-y-4">
              {/* Componente de sugerencia de ubicación */}
              <LocationSuggestion />

              {/* Filtros */}
              <div className="bg-white p-4 rounded-lg shadow-sm sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Filtros</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Limpiar
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Rango de precio */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">
                      Presupuesto (S/)
                    </h3>
                    <div className="space-y-4">
                      <Slider defaultValue={[5000]} max={10000} step={100} />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">S/0</span>
                        <span className="text-xs font-medium">S/5,000</span>
                        <span className="text-xs text-gray-500">S/10,000+</span>
                      </div>
                    </div>
                  </div>

                  {/* Tipo de trabajo */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">
                      Tipo de trabajo
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="presencial" />
                        <label htmlFor="presencial" className="text-sm">
                          Presencial
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remoto" />
                        <label htmlFor="remoto" className="text-sm">
                          Remoto
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Fecha */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">
                      Fecha requerida
                    </h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Cualquier fecha" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cualquiera">
                          Cualquier fecha
                        </SelectItem>
                        <SelectItem value="hoy">Hoy</SelectItem>
                        <SelectItem value="semana">Esta semana</SelectItem>
                        <SelectItem value="mes">Este mes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Urgencia */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="urgente" />
                      <label htmlFor="urgente" className="text-sm">
                        Solo trabajos urgentes
                      </label>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Filter className="h-4 w-4 mr-2" />
                    Aplicar filtros
                  </Button>
                </div>
              </div>
            </div>

            {/* Listado de trabajos */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">
                  Trabajos disponibles ({filteredJobs.length})
                </h1>
                <Select defaultValue="recientes">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recientes">Más recientes</SelectItem>
                    <SelectItem value="presupuesto-alto">
                      Mayor presupuesto
                    </SelectItem>
                    <SelectItem value="presupuesto-bajo">
                      Menor presupuesto
                    </SelectItem>
                    <SelectItem value="fecha">Fecha más próxima</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredJobs.length === 0 ? (
                <Card className="p-8 text-center">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <Search className="h-12 w-12 text-gray-300" />
                    <h3 className="text-lg font-medium">
                      No se encontraron trabajos
                    </h3>
                    <p className="text-gray-500">
                      Intenta con otros criterios de búsqueda
                    </p>
                  </div>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredJobs.map((trabajo) => (
                    <Card
                      key={trabajo.id}
                      className="overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                            <img
                              src={trabajo.imagen || '/placeholder.svg'}
                              alt={trabajo.titulo}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h2 className="text-lg font-semibold mb-1">
                                  {trabajo.titulo}
                                </h2>
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                  <Briefcase className="h-4 w-4 mr-1" />
                                  <span>{trabajo.categoria}</span>
                                  <span className="mx-2">•</span>
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{trabajo.ubicacion}</span>
                                </div>
                              </div>
                              {trabajo.urgente && (
                                <Badge variant="destructive" className="ml-2">
                                  Urgente
                                </Badge>
                              )}
                            </div>

                            <p className="text-gray-700 mb-4 line-clamp-2">
                              {trabajo.descripcion}
                            </p>

                            <div className="flex flex-wrap items-center justify-between">
                              <div className="flex items-center">
                                <span className="font-semibold text-lg text-orange-600">
                                  S/{trabajo.presupuesto}
                                </span>
                              </div>

                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{trabajo.publicado}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t px-6 py-3 bg-gray-50 flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span className="text-sm text-gray-500">
                              Fecha: {trabajo.fecha}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              onClick={() =>
                                router.push(`/trabajos/${trabajo.id}`)
                              }
                            >
                              Ver detalles
                            </Button>
                            {/* <Button onClick={handlePostular}>Postular</Button> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mx-1">
                  Anterior
                </Button>
                <Button variant="outline" className="mx-1 bg-orange-50">
                  1
                </Button>
                <Button variant="outline" className="mx-1">
                  2
                </Button>
                <Button variant="outline" className="mx-1">
                  3
                </Button>
                <Button variant="outline" className="mx-1">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Diálogo de login requerido */}
      <AlertDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Inicia sesión para postular</AlertDialogTitle>
            <AlertDialogDescription>
              Necesitas iniciar sesión o crear una cuenta para postular a este
              trabajo.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogin}>
              Iniciar sesión
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
