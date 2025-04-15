'use client'

import Image from 'next/image'
import { Card, CardContent } from './ui/Card'

const jerseyStats = [
  { label: 'Total Jersey', value: 40 },
  { label: 'Vintage Jersey', value: 12 },
  { label: 'Longsleeve Jersey', value: 9 }
]

const jerseyImages = [
  '/jerseys/1.jpg',
  '/jerseys/2.jpg',
  '/jerseys/1.jpg',
  '/jerseys/2.jpg',
  '/jerseys/1.jpg',
]

const Welcome = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800 dark:text-white">
          Welcome to DebvJersey
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Explore a curated collection of premium football jerseys — from vintage classics to iconic long sleeve kits worn by legends.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {jerseyStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="text-center">
              <h2 className="text-4xl font-extrabold text-yellow-500">{stat.value}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Jersey Images */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {jerseyImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300">
            <Image
              src={src}
              alt={`Jersey ${index + 1}`}
              width={600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Welcome
