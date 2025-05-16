import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-orange-500">Jobli</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Conectamos personas que necesitan servicios temporales con
              trabajadores independientes calificados.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Para Contratantes</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/publicar"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Publicar trabajo
                </Link>
              </li>
              <li>
                <Link
                  href="/como-contratar"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cómo contratar
                </Link>
              </li>
              <li>
                <Link
                  href="/precios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/garantia"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Garantía de servicio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Para Trabajadores</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/trabajos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Buscar trabajos
                </Link>
              </li>
              <li>
                <Link
                  href="/crear-perfil"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Crear perfil
                </Link>
              </li>
              <li>
                <Link
                  href="/consejos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Consejos para postular
                </Link>
              </li>
              <li>
                <Link
                  href="/pagos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pagos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ayuda"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jobli. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
