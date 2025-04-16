'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import generateRandomLines from '../utils/generateRandomLines'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [width, setWidth] = useState(1000)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {width > 840 ? (
        <>
          <nav
            className={`fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between p-4 px-10 transition-all duration-300 ${
                isScrolled ? 'bg-[var(--liverpool-red)] py-2' : 'bg-transparent py-4'
            }`}
            >
            {isScrolled && (
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                {generateRandomLines(25).map((line) => (
                <div
                    key={line.id}
                    style={{
                    position: 'absolute',
                    top: `${line.top}%`,
                    left: `${line.left}%`,
                    height: `${line.height}px`,
                    width: '1px',
                    backgroundColor: 'rgba(255, 255, 0, 0.9)',
                    transform: `rotate(${line.rotation}deg)`,
                    // opacity: line.opacity,
                    }}
                />
                ))}
            </div>
            )}
            <Link
                href="/"
                className="flex items-center font-black transition-all duration-300 ease-in-out hover:scale-105"
            >
                <h1
                    className={`text-yellow-500 mr-1 transition-all duration-300 ${
                    isScrolled ? 'text-5xl' : 'text-5xl'
                    }`}
                >
                    D
                </h1>
                <h1
                    className={`logo-caption pt-2 transition-all duration-300 ${
                    isScrolled ? 'text-lg' : 'text-xl'
                    }`}
                >
                    ebversey
                </h1>
            </Link>
            <div className="flex gap-10 font-bold relative">
              <Link
                href="/"
                className="hover:text-yellow-500 transition-all ease-in-out duration-300 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="hover:text-yellow-500 transition-all ease-in-out duration-300 hover:scale-105"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="hover:text-yellow-500 transition-all ease-in-out duration-300 hover:scale-105"
              >
                About
              </Link>
              <div
                className={`absolute w-12 h-1 bg-yellow-500 top-6 transition-all ease-in-out duration-300 ${
                  (pathname === '/' && 'left-[-2px]') ||
                  (pathname === '/gallery' && 'left-[88px]') ||
                  (pathname === '/about' && 'left-[178px]')
                }`}
              ></div>
            </div>
            <div className="flex gap-10 items-center font-bold">
              <Link
                href="/"
                className={`bg-yellow-500 rounded-md hover:text-yellow-500 text-white hover:bg-white border-2 border-yellow-500 transition-all ease-in-out duration-300 ${
                    isScrolled ? 'p-2' : 'p-3'
                    }`}
              >
                Contact Me
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <MobileNavbar />
        </>
      )}
    </div>
  )
}

export default Navbar
