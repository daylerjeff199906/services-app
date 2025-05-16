import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
  Search,
  Star,
  User
} from 'lucide-react'
import Link from 'next/link'

export default function ComoFuncionaPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">¿Cómo funciona Jobli?</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conectamos a personas que necesitan servicios temporales con
            trabajadores independientes de manera rápida, segura y eficiente.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contratante" className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="contratante">Para Contratantes</TabsTrigger>
                <TabsTrigger value="trabajador">Para Trabajadores</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contratante">
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    ¿Necesitas contratar un servicio?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Publicar un trabajo en Jobli es fácil y rápido. Sigue
                    estos pasos para encontrar al trabajador ideal para tu
                    necesidad.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-0 right-0 top-0 h-80 overflow-hidden rounded-xl -z-10">
                    <img
                      src="http://blog.pucp.edu.pe/blog/espaseoperu/wp-content/uploads/sites/830/2023/07/contratar-gasfitero-profesional.jpg"
                      alt="Contratante y trabajador"
                      className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                  </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Publica tu trabajo
                      </h3>
                      <p className="text-gray-600">
                        Describe el servicio que necesitas, establece un
                        presupuesto y fecha requerida. Sé específico para atraer
                        a los mejores candidatos.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <User className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Recibe postulaciones
                      </h3>
                      <p className="text-gray-600">
                        Los trabajadores interesados se postularán a tu oferta.
                        Revisa sus perfiles, calificaciones y experiencia
                        previa.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <MessageSquare className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Selecciona y coordina
                      </h3>
                      <p className="text-gray-600">
                        Elige al mejor candidato y coordina los detalles a
                        través de nuestro sistema de mensajería integrado.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Star className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Completa y califica
                      </h3>
                      <p className="text-gray-600">
                        Una vez finalizado el trabajo, realiza el pago y deja
                        una calificación para ayudar a otros usuarios.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Button asChild size="lg" className="mt-4">
                    <Link href="/publicar">
                      Publicar un trabajo{' '}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trabajador">
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    ¿Buscas oportunidades laborales?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Encuentra trabajos que se ajusten a tus habilidades y
                    disponibilidad. Sigue estos pasos para comenzar a trabajar
                    con Jobli.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-0 right-0 top-0 h-80 overflow-hidden rounded-xl -z-10">
                    <img
                      src="https://www.habitissimo.es/procenter/wp-content/uploads/2020/07/carpinteros.jpg"
                      alt="Trabajadores"
                      className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                  </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <User className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Crea tu perfil
                      </h3>
                      <p className="text-gray-600">
                        Regístrate y completa tu perfil con tus habilidades,
                        experiencia y disponibilidad. Un perfil completo aumenta
                        tus posibilidades.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Busca trabajos
                      </h3>
                      <p className="text-gray-600">
                        Explora las ofertas disponibles y filtra por categoría,
                        ubicación o presupuesto para encontrar las más adecuadas
                        para ti.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Briefcase className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Postúlate</h3>
                      <p className="text-gray-600">
                        Envía tu postulación explicando por qué eres el
                        candidato ideal y responde a las preguntas del
                        contratante.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-orange-500">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="absolute -mt-10 ml-14 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Realiza el trabajo
                      </h3>
                      <p className="text-gray-600">
                        Si eres seleccionado, coordina los detalles, realiza el
                        trabajo con profesionalismo y recibe tu pago de forma
                        segura.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Button asChild size="lg" className="mt-4">
                    <Link href="/trabajos">
                      Buscar trabajos <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resolvemos tus dudas sobre cómo funciona Jobli
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  ¿Cuánto cuesta publicar un trabajo?
                </h3>
                <p className="text-gray-600">
                  Publicar un trabajo en Jobli es completamente gratuito.
                  Solo pagas una comisión del 10% cuando encuentras al
                  trabajador ideal y se completa el servicio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  ¿Cómo se garantiza la calidad de los trabajadores?
                </h3>
                <p className="text-gray-600">
                  Todos los trabajadores pasan por un proceso de verificación.
                  Además, el sistema de calificaciones y reseñas te permite
                  conocer la experiencia de otros usuarios antes de contratar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  ¿Cómo funciona el sistema de pagos?
                </h3>
                <p className="text-gray-600">
                  Jobli ofrece un sistema de pagos seguro. El dinero se
                  retiene hasta que el trabajo se completa satisfactoriamente,
                  protegiendo tanto al contratante como al trabajador.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  ¿Qué pasa si no estoy satisfecho con el trabajo?
                </h3>
                <p className="text-gray-600">
                  Contamos con un proceso de resolución de disputas. Si no estás
                  satisfecho, puedes reportarlo y nuestro equipo de soporte te
                  ayudará a encontrar una solución justa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  ¿Cómo me comunico con el trabajador o contratante?
                </h3>
                <p className="text-gray-600">
                  Jobli cuenta con un sistema de mensajería integrado que te
                  permite comunicarte de forma segura sin compartir datos
                  personales hasta que ambas partes estén de acuerdo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Beneficios de usar Jobli
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre por qué miles de personas confían en nuestra plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápido y eficiente</h3>
              <p className="text-gray-600">
                Encuentra trabajadores o trabajos en cuestión de horas, no días.
                Nuestra plataforma está diseñada para conectar rápidamente
                oferta y demanda.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguro y confiable</h3>
              <p className="text-gray-600">
                Verificamos a todos los usuarios y ofrecemos un sistema de pagos
                seguro que protege a ambas partes durante toda la transacción.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Calidad garantizada
              </h3>
              <p className="text-gray-600">
                Nuestro sistema de calificaciones y reseñas te ayuda a tomar
                decisiones informadas y garantiza la calidad de los servicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a miles de personas que ya están conectando con oportunidades
            en Jobli
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <Link href="/registro">Crear cuenta gratis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/trabajos">Explorar trabajos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
