import { Check, FileText, Search, UserCheck } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-orange-600" />,
      title: 'Publica o busca',
      description:
        'Publica un trabajo o busca entre las oportunidades disponibles'
    },
    {
      icon: <Search className="h-10 w-10 text-orange-600" />,
      title: 'Conecta',
      description:
        'Encuentra al trabajador ideal o postúlate a los trabajos que te interesen'
    },
    {
      icon: <UserCheck className="h-10 w-10 text-orange-600" />,
      title: 'Acuerda',
      description: 'Comunícate y acuerda los detalles del servicio'
    },
    {
      icon: <Check className="h-10 w-10 text-orange-600" />,
      title: '¡Listo!',
      description: 'Completa el trabajo y deja tu valoración'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>

          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
