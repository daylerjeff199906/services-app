'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import {
  Briefcase,
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  User
} from 'lucide-react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'

export default function TrabajoDetallePage() {
  const router = useRouter()
  const params = useParams()
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)

  // Datos de ejemplo para el trabajo
  const trabajo = {
    id: params.id,
    titulo: 'Electricista para instalación de lámparas',
    categoria: 'Oficios y Reparaciones',
    descripcion:
      'Necesito un electricista para instalar 5 lámparas en mi departamento. Se requiere experiencia y herramientas propias. Las lámparas son de techo y pared, algunas requieren cableado nuevo. El trabajo debe realizarse en un día. Se valorará puntualidad y limpieza en el trabajo.',
    presupuesto: 800,
    ubicacion: 'Lima, Miraflores',
    direccion: 'Cerca de Parque Kennedy',
    fecha: '2023-06-15',
    horario: '9:00 AM - 5:00 PM',
    urgente: true,
    publicado: 'Hace 2 horas',
    imagen:
      'http://blog.pucp.edu.pe/blog/espaseoperu/wp-content/uploads/sites/830/2023/07/contratar-gasfitero-profesional.jpg',
    requisitos: [
      'Experiencia mínima de 2 años en instalaciones eléctricas',
      'Herramientas propias',
      'Conocimiento de normativas eléctricas',
      'Referencias de trabajos anteriores'
    ],
    habilidades: [
      'Instalaciones eléctricas',
      'Cableado',
      'Iluminación',
      'Reparaciones'
    ],
    contratante: {
      id: 'user123',
      nombre: 'Laura Méndez',
      foto: 'https://randomuser.me/api/portraits/women/44.jpg',
      calificacion: 4.8,
      trabajosPublicados: 5,
      miembroDesde: 'Enero 2023'
    },
    postulantes: 3,
    vistas: 45
  }

  const handlePostular = () => {
    // Simular verificación de login
    const isLoggedIn = false // En un caso real, verificaríamos el estado de autenticación

    if (!isLoggedIn) {
      setLoginDialogOpen(true)
    } else {
      // Lógica para postular si está logueado
      console.log('Usuario logueado, procesando postulación...')
    }
  }

  const handleLogin = () => {
    router.push(`/login?redirect=trabajos/${params.id}`)
  }

  return (
    <>
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna izquierda - Detalles del trabajo */}
            <div className="lg:col-span-2">
              <Card className="mb-6 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={trabajo.imagen || '/placeholder.svg'}
                    alt={trabajo.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">
                        {trabajo.titulo}
                      </h1>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{trabajo.categoria}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{trabajo.ubicacion}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{trabajo.publicado}</span>
                      </div>
                    </div>
                    {trabajo.urgente && (
                      <Badge variant="destructive" className="ml-2">
                        Urgente
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-500">Presupuesto</p>
                      <p className="text-2xl font-bold text-orange-600">
                        S/{trabajo.presupuesto}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fecha</p>
                      <p className="font-medium">{trabajo.fecha}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Horario</p>
                      <p className="font-medium">{trabajo.horario}</p>
                    </div>
                  </div>

                  <Tabs defaultValue="descripcion">
                    <TabsList className="mb-4">
                      <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                      <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
                      <TabsTrigger value="ubicacion">Ubicación</TabsTrigger>
                    </TabsList>

                    <TabsContent value="descripcion" className="space-y-4">
                      <div>
                        <h2 className="text-lg font-semibold mb-2">
                          Descripción del trabajo
                        </h2>
                        <p className="text-gray-700">{trabajo.descripcion}</p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">
                          Habilidades requeridas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {trabajo.habilidades.map((habilidad, index) => (
                            <Badge key={index} variant="secondary">
                              {habilidad}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="requisitos">
                      <div>
                        <h2 className="text-lg font-semibold mb-2">
                          Requisitos
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {trabajo.requisitos.map((requisito, index) => (
                            <li key={index}>{requisito}</li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="ubicacion">
                      <div>
                        <h2 className="text-lg font-semibold mb-2">
                          Ubicación
                        </h2>
                        <p className="text-gray-700 mb-4">
                          <MapPin className="h-4 w-4 inline mr-1" />
                          {trabajo.ubicacion} - {trabajo.direccion}
                        </p>
                        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                          <p className="text-gray-500">Mapa de ubicación</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Trabajos similares</h2>
                <Link
                  href="/trabajos"
                  className="text-orange-600 hover:underline text-sm"
                >
                  Ver todos
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="https://www.habitissimo.es/procenter/wp-content/uploads/2020/07/carpinteros.jpg"
                      alt="Carpintero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">
                      Carpintero para muebles a medida
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Lima, San Isidro</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-orange-600">
                        S/950
                      </span>
                      <Badge variant="outline">Oficios</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img
                      src="https://guiauniversitaria.mx/wp-content/uploads/2019/12/empleos-para-vacaciones-medio-tiempo-y-tiempo-libre.jpg.webp"
                      alt="Evento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">
                      Ayudante para evento corporativo
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Lima, Barranco</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-orange-600">
                        S/1,200
                      </span>
                      <Badge variant="outline">Eventos</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Columna derecha - Acciones y contratante */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <Button onClick={handlePostular} className="w-full mb-4">
                      Postular a este trabajo
                    </Button>
                    <p className="text-sm text-gray-500">
                      {trabajo.postulantes} personas ya se han postulado
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={trabajo.contratante.foto || '/placeholder.svg'}
                          alt={trabajo.contratante.nombre}
                        />
                        <AvatarFallback>
                          {trabajo.contratante.nombre.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">
                          {trabajo.contratante.nombre}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>
                            Miembro desde {trabajo.contratante.miembroDesde}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center text-sm mb-4">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500">Calificación</p>
                        <p className="font-medium">
                          {trabajo.contratante.calificacion}/5
                        </p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500">Trabajos</p>
                        <p className="font-medium">
                          {trabajo.contratante.trabajosPublicados}
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handlePostular}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contactar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">
                    Consejos para postulantes
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex">
                      <User className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                      <span>
                        Completa tu perfil con todas tus habilidades y
                        experiencia
                      </span>
                    </li>
                    <li className="flex">
                      <MessageSquare className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                      <span>
                        Envía un mensaje personalizado explicando por qué eres
                        ideal para el trabajo
                      </span>
                    </li>
                    <li className="flex">
                      <Clock className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                      <span>
                        Responde rápidamente a los mensajes del contratante
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
