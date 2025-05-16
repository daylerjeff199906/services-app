import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Briefcase,
  Clock,
  MapPin,
  Shield,
  Star
} from 'lucide-react'
import { HowItWorks } from '@/components/app/how-it-works'
import { CategoryCard } from '@/components/app/category-card'
import { TestimonialCard } from '@/components/app/testimonial-card'
import { LocationSuggestion } from '@/components/app/location-suggestion'

import bannerImage from '@/assets/images/banner/banner-image.webp'

export default function HomePage() {
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                  Encuetra y ofrece servicios temporales
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Jobli es la plataforma que conecta a personas que necesitan
                  servicios temporales con trabajadores independientes
                  calificados.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100"
                  >
                    <Link href="/publicar">
                      Publicar trabajo <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    <Link href="/trabajos">
                      Buscar trabajo <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src={bannerImage.src}
                  alt="Personas trabajando juntas"
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Suggestion */}
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            <LocationSuggestion />
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Cómo funciona?
            </h2>
            <HowItWorks />
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Categorías populares
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <CategoryCard
                icon={<Briefcase className="h-8 w-8" />}
                title="Oficios y Reparaciones"
                count={120}
                imageUrl="https://www.habitissimo.es/procenter/wp-content/uploads/2020/07/carpinteros.jpg"
              />
              <CategoryCard
                icon={<Clock className="h-8 w-8" />}
                title="Eventos Temporales"
                count={85}
                imageUrl="https://artistasperu.com/wp-content/uploads/2019/12/showman.jpg"
              />
              <CategoryCard
                icon={<MapPin className="h-8 w-8" />}
                title="Servicios a Domicilio"
                count={210}
                imageUrl="https://cimacnoticias.com.mx/wp-content/uploads/2014/09/costureras01_cesarmartinezlopez.jpg"
              />
              <CategoryCard
                icon={<Star className="h-8 w-8" />}
                title="Servicios Profesionales"
                count={95}
                imageUrl="https://e00-xlk-ue-marca.uecdn.es/files/article_828_widen_webp/uploads/2025/03/20/17262558893194.webp"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Lo que dicen nuestros usuarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Carlos Mendoza"
                role="Contratante"
                image="https://randomuser.me/api/portraits/men/32.jpg"
                text="Encontré un electricista en menos de 2 horas. El trabajo quedó perfecto y a un precio justo."
              />
              <TestimonialCard
                name="María Fernández"
                role="Trabajadora independiente"
                image="https://randomuser.me/api/portraits/women/44.jpg"
                text="Gracias a Jobli he podido conseguir trabajos flexibles que se adaptan a mi horario universitario."
              />
              <TestimonialCard
                name="Roberto Sánchez"
                role="Contratante"
                image="https://randomuser.me/api/portraits/men/67.jpg"
                text="La plataforma es muy fácil de usar y los trabajadores son profesionales. Totalmente recomendado."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a miles de personas que ya están conectando con
              oportunidades en Jobli
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
                <Link href="/como-funciona">Saber más</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Pagos Seguros</h3>
                  <p className="text-sm text-gray-600">
                    Transacciones protegidas
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Trabajadores Verificados</h3>
                  <p className="text-sm text-gray-600">Perfiles confiables</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Soporte 24/7</h3>
                  <p className="text-sm text-gray-600">Estamos para ayudarte</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
