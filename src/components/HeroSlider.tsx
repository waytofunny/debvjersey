'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/HeroSlider.module.css'
import { Slide } from './types'

const slides: Slide[] = [
  {
    id: 1,
    image: '/jerseys/jersey1.jpg',
    title: 'Liverpool FC 2023/24 Home Kit',
    description: 'Authentic match jersey with player version details'
  },
  {
    id: 2,
    image: '/jerseys/jersey2.jpg',
    title: 'Liverpool FC 2022/23 Away Kit',
    description: 'Limited edition retro-inspired design'
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className={styles.heroSlider}>
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={styles.slideImage}
              priority
            />
            <div className={styles.caption}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.sliderControls}>
        <button onClick={prevSlide} className={styles.controlButton}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextSlide} className={styles.controlButton}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}