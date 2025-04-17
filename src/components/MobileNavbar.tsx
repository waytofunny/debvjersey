'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import generateRandomLines from '@/utils/generateRandomLines'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-3 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-[var(--liverpool-red)]' : 'bg-transparent'
      }`}
    >
    {isScrolled && (
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {generateRandomLines(1).map((line) => (
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
      {/* Logo */}
      <Link href="/" className="flex items-center font-black text-yellow-500 text-3xl">
        D<span className="text-white text-lg ml-1 pt-1">ebvjersey</span>
      </Link>

      {/* Menu Icon */}
      <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none z-50">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--liverpool-red)] text-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative z-10 mt-35 flex flex-col justify-center items-center">
          <Link href="/" onClick={closeMenu} className="flex items-center font-black text-yellow-500 text-6xl">
            D
            <span className="text-white text-2xl ml-1 pt-4">ebvjersey</span>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            {generateRandomLines(2).map((line) => (
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
        <div className="relative z-10 h-full mt-[-180px] flex flex-col justify-center items-center space-y-6">
          <Link
            href="/"
            onClick={closeMenu}
            className={`mb-6 text-xl ${pathname === '/' ? 'text-yellow-300' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            onClick={closeMenu}
            className={`mb-6 text-xl ${pathname === '/gallery' ? 'text-yellow-300' : ''}`}
          >
            Gallery
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={`mb-6 text-xl ${pathname === '/about' ? 'text-yellow-300' : ''}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 px-6 py-2 border-2 border-yellow-400 rounded-md hover:bg-white hover:text-yellow-500 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar


// 'use client'

// import Link from "next/link"
// import { useEffect, useState } from 'react'
// import generateRandomLines from '@/utils/generateRandomLines'

// const MobileNavbar = () => {
//   const [activeMenu, setActiveMenu] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])
  
//   return (
//     <div className="relative">
//       <nav className={`fixed top-0 left-0 w-full z-50 shadow-md p-4 px-10 flex items-center justify-between ${
//               isScrolled ? 'bg-[var(--liverpool-red)]' : 'bg-transparent'
//           }`}>

//       {isScrolled && (
//         <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
//             {generateRandomLines(1).map((line) => (
//             <div
//                 key={line.id}
//                 style={{
//                 position: 'absolute',
//                 top: `${line.top}%`,
//                 left: `${line.left}%`,
//                 height: `${line.height}px`,
//                 width: '1px',
//                 backgroundColor: 'rgba(255, 255, 0, 0.9)',
//                 transform: `rotate(${line.rotation}deg)`,
//                 // opacity: line.opacity,
//                 }}
//             />
//             ))}
//         </div>
//         )}
//         <Link
//           href="/"
//           className="flex items-center font-black text-xl hover:scale-105 transition-all ease-in-out duration-300"
//         >
//           <h1 className="text-yellow-500 text-4xl mr-1">E</h1>
//           <h1 className="">moTrack</h1>
//         </Link>
//         <div
//           className="flex flex-col gap-1"
//           onClick={() => setActiveMenu(!activeMenu)}
//         >
//           <div
//             className={`w-8 h-1 origin-[33%_80%] bg-white ${
//               activeMenu ? 'rotate-[45deg]' : ''
//             } transition-all ease-in-out duration-300`}
//           ></div>
//           <div
//             className={`w-8 h-1 bg-white ${
//               activeMenu ? 'hidden' : ''
//             } transition-all ease-in-out duration-300`}
//           ></div>
//           <div
//             className={`w-8 h-1 bg-white origin-[33%_80%] ${
//               activeMenu ? '-rotate-[45deg]' : ''
//             } transition-all ease-in-out duration-300`}
//           ></div>
//         </div>
//       </nav>
//       <div
//         className={`absolute h-screen w-[250px] bg-yellow-500 top-0 ${
//           activeMenu ? 'left-0' : 'left-[-300px]'
//         } transition-all ease-in-out duration-700 flex items-center justify-center font-black text-lg text-white`}
//       >
//         <div className="flex flex-col gap-10 p-10">
//           <div className="group">
//             <Link
//               href="/"
//               className="hover:text-black transition-all ease-in-out duration-300"
//             >
//               Home
//             </Link>
//             <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
//           </div>
//           <div className="group">
//             <Link
//               href="/"
//               className="hover:text-black transition-all ease-in-out duration-300"
//             >
//               About
//             </Link>
//             <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
//           </div>
//           <div className="group">
//             <Link
//               href="/"
//               className="hover:text-black transition-all ease-in-out duration-300"
//             >
//               Services
//             </Link>
//             <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
//           </div>
//           <div className='group'>
//             <Link
//               href="/"
//               className="hover:text-black transition-all ease-in-out duration-300"
//             >
//               Login
//             </Link>
//             <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
//           </div>
//           <div className='group'>
//             <Link
//               href="/"
//               className="hover:text-black transition-all ease-in-out duration-300"
//             >
//               Contact Us
//             </Link>
//             <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MobileNavbar
