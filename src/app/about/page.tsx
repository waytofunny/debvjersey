import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> 
    <div className="min-h-screen">
      <Navbar />  
      <main className="pt-24 dark:bg-neutral-900">
        <div className="min-h-screen text-neutral-900 dark:text-neutral-100 px-6 py-20 max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DebvJersey</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A curated showcase of football jersey history, passion, and culture.
            </p>
          </section>

          {/* Image + Text Section */}
          <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/jersey-collection.jpg"
                alt="jersey wall"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">A Jersey Collector's Passion</h2>
              <p className="text-base leading-relaxed">
                DebvJersey was born from a deep admiration of football history and jersey aesthetics. With over 40 carefully collected jerseys from clubs like Liverpool and AC Milan, each piece tells a story — from vintage classics to modern long-sleeve legends.
              </p>
              <p className="text-base leading-relaxed">
                This platform is a personal archive, a gallery, and a tribute to football culture — designed for fellow enthusiasts, collectors, and fans who love the beauty of the game stitched in fabric.
              </p>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-20">
            <h2 className="text-xl font-semibold mb-6 text-center">Quick Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="text-4xl font-bold text-yellow-500">40+</p>
                <p className="text-sm mt-2">Total Jerseys</p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="text-4xl font-bold text-yellow-500">15</p>
                <p className="text-sm mt-2">Vintage Jerseys</p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="text-4xl font-bold text-yellow-500">12</p>
                <p className="text-sm mt-2">Longsleeves</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h3 className="text-lg md:text-xl font-medium mb-4">
              Want to explore the full collection?
            </h3>
            <Link
              href="/gallery"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
            >
              Visit the Gallery
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
