import type { ReactNode } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface CategoryCardProps {
  icon: ReactNode
  title: string
  count: number
  imageUrl?: string
}

export function CategoryCard({
  icon,
  title,
  count,
  imageUrl
}: CategoryCardProps) {
  return (
    <Link href={`/trabajos?categoria=${encodeURIComponent(title)}`}>
      <Card className="transition-all hover:shadow-md hover:border-orange-300 overflow-hidden">
        {imageUrl && (
          <div className="w-full h-40 overflow-hidden">
            <img
              src={imageUrl || '/placeholder.svg'}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        )}
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">{icon}</div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{count} trabajos disponibles</p>
        </CardContent>
      </Card>
    </Link>
  )
}
