
import { useState, useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SEO from './components/layout/SEO'
import About from './pages/About'
import Button from './components/layout/ui/Button'

import januaryImage from './assets/images/jan.jpg'
import livingRoomImage from './assets/images/livingroom.png'
import officeImage from './assets/images/office.png'

const images = [
  {
    src: januaryImage,
    alt: 'January 2027 page of the minimalist blue wall calendar',
    border: true,
    zoom: 1,
  },
  {
    src: livingRoomImage,
    alt: 'Minimalist 2027 wall calendar displayed in an industrial living room',
    border: false,
    zoom: 1,
  },
  {
    src: officeImage,
    alt: 'Minimalist 2027 wall calendar displayed in a modern industrial office',
    border: false,
    zoom: 1.8,
    position: '60% 80%',
  },
]

function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const [showAbout, setShowAbout] = useState(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) =>
        (previousImage + 1) % images.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentPath =
    window.location.pathname.replace(/\/+$/, '') || '/'

  if (currentPath === '/about') {
    return (
      <>
        <About />
        <Analytics />
      </>
    )
  }

  const nextImage = () => {
    setCurrentImage((previousImage) =>
      (previousImage + 1) % images.length
    )
  }

  const previousImage = () => {
    setCurrentImage((previousImage) =>
      (previousImage - 1 + images.length) % images.length
    )
  }

  const handlePointerDown = (event) => {
    touchStartX.current = event.clientX
  }

  const handlePointerUp = (event) => {
    if (touchStartX.current === null) return

    const difference = event.clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(difference) < 40) return

    if (difference < 0) {
      nextImage()
    } else {
      previousImage()
    }
  }

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-x-hidden bg-calendar-blue font-outfit text-white md:h-screen md:overflow-hidden"
    >
      <SEO
        title="2027 Wall Calendar | Minimalist Design Calendar"
        description="Discover a minimalist 2027 wall calendar featuring bold blue design, crisp white typography and a timeless aesthetic. Make 2027 awesome."
        path="/"
      />

      {/* Navbar */}
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          showAbout
            ? 'pointer-events-none -translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        <Navbar />
      </div>

      {/* Sections */}
      <div
        className={`relative md:absolute md:inset-x-0 md:bottom-0 md:top-[88px] md:transition-transform md:duration-1000 md:ease-[cubic-bezier(0.76,0,0.24,1)] ${
          showAbout ? 'md:-translate-y-full' : 'md:translate-y-0'
        }`}
      >
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className={`flex min-h-screen flex-col items-center justify-center px-6 md:h-full md:min-h-0 ${
            showAbout ? 'hidden md:flex' : 'flex'
          }`}
        >
          <div
            className={`flex flex-col items-center transition-all duration-1000 ${
              showAbout
                ? '-translate-y-16 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            <h1
              id="hero-heading"
              className="max-w-4xl text-center text-5xl font-light leading-tight tracking-tight sm:text-6xl md:text-7xl"
            >
              2027 is gonna be awesome.
            </h1>

            <div className="mt-12 flex flex-col items-center">
              <Button
                href="#about"
                onClick={(event) => {
                  event.preventDefault()
                  setShowAbout(true)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Discover more
              </Button>

              <span
                aria-hidden="true"
                className="animate-arrow-flow mt-5 text-3xl font-light"
              >
                ↓
              </span>
            </div>
          </div>
        </section>

        {/* Homepage About section */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className={`grid grid-cols-1 items-center gap-8 px-6 pb-12 pt-28 sm:gap-10 md:mx-auto md:h-full md:max-w-[1200px] md:grid-cols-2 md:gap-12 md:px-6 md:py-10 ${
            showAbout ? 'grid' : 'hidden md:grid'
          }`}
        >
          {/* Text */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-1000 delay-200 md:items-start md:text-left ${
              showAbout
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <h2
              id="about-heading"
              className="mb-5 max-w-xl text-3xl font-light leading-tight sm:text-4xl md:mb-8 md:text-5xl"
            >
              A calendar that makes you think.
            </h2>

            <div className="max-w-md">
              <p className="text-sm font-light leading-relaxed opacity-80 sm:text-base">
                A minimalist wall calendar where every detail has its place. A
                striking blue, crisp white typography and a timeless aesthetic
                make this calendar more than just a way to keep track of days.
                It's a statement piece for your space.
              </p>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex md:flex-col md:items-start">
              <Button
                href="https://www.instagram.com/domen_kjuder/"
                className="mt-8 md:mt-10"
              >
                Get It
              </Button>

              <p className="mt-3 text-xs font-light opacity-70">
                For orders or questions, send me a DM on Instagram.
              </p>
            </div>
          </div>

          {/* Image carousel */}
          <div
            className={`flex flex-col items-center transition-all duration-1000 delay-300 ${
              showAbout
                ? 'translate-y-0 opacity-100'
                : 'translate-y-24 opacity-0'
            }`}
          >
            <div
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                touchStartX.current = null
              }}
              onContextMenu={(event) => event.preventDefault()}
              className="relative aspect-[4/5] w-[min(78vw,300px)] cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing sm:w-[min(65vw,320px)] md:w-[90%] md:max-w-none"
              aria-label="Calendar image carousel. Swipe left or right to change images."
            >
              <img
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                loading="lazy"
                decoding="async"
                draggable="false"
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
                className={`absolute inset-0 h-full w-full select-none object-cover ${
                  images[currentImage].border ? 'border border-white' : ''
                }`}
                style={{
                  transform: `scale(${images[currentImage].zoom})`,
                  objectPosition: images[currentImage].position || '50% 50%',
                }}
              />
            </div>

            {/* Navigation dots */}
            <div
              className="mt-5 flex items-center gap-4 md:mt-6"
              aria-label="Choose calendar image"
            >
              {images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={currentImage === index}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? 'scale-125 bg-white'
                      : 'bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 flex flex-col items-center md:hidden">
              <Button href="https://www.instagram.com/domen_kjuder/">
                Get It
              </Button>

              <p className="mt-3 text-center text-xs font-light opacity-70">
                For orders or questions, send me a DM on Instagram.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div
        className={`relative z-10 mt-2 transition-opacity duration-700 md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0 ${
          showAbout ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <Footer />
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => {
          setShowAbout(false)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        aria-label="Back to top"
        className={`fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-5 z-50 flex h-12 w-12 items-center justify-center border border-white bg-white text-2xl font-light text-calendar-blue transition-all duration-500 hover:bg-white/90 md:absolute md:bottom-10 md:right-10 ${
          showAbout
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        ↑
      </button>

      <Analytics />
    </main>
  )
}

export default App
