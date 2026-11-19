
import { useState, useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SEO from './components/layout/SEO'
import Order from './pages/Order'
import Button from './components/layout/ui/Button'

import januaryImage from './assets/images/jan.svg'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) =>
        (previousImage + 1) % images.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

  if (currentPath === '/order') {
    return <Order />
  }

  return (
    <main
      id="home"
      className="relative h-screen overflow-hidden bg-calendar-blue font-outfit text-white"
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

      {/* Animated sections */}
      <div
        className={`absolute inset-x-0 bottom-0 top-[88px] transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          showAbout ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="flex h-full flex-col items-center justify-center px-6"
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

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="grid h-full grid-cols-1 items-center gap-4 overflow-hidden px-6 py-5 sm:gap-6 md:mx-auto md:max-w-[1200px] md:grid-cols-2 md:gap-12 md:px-6 md:py-10"
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
              className="mb-4 text-3xl font-light leading-tight sm:text-4xl md:mb-8 md:text-5xl"
            >
              A calendar that makes you think.
            </h2>

            <p className="max-w-md text-sm font-light leading-relaxed opacity-80 sm:text-base">
              A minimalist wall calendar where every detail has its place. A
              striking blue, crisp white typography and a timeless aesthetic
              make this calendar more than just a way to keep track of days.
              It's a statement piece for your space.
            </p>

            <div className="hidden md:block">
              <Button href="/order" className="mt-8 md:mt-10">
                Order now ↗
              </Button>
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
            <button
              type="button"
              onClick={() =>
                setCurrentImage((previousImage) =>
                  (previousImage + 1) % images.length
                )
              }
              aria-label="Show next calendar image"
              className="relative aspect-[4/5] w-[65%] max-w-[280px] cursor-pointer overflow-hidden sm:w-[60%] md:w-[90%] md:max-w-none"
            >
              <img
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover ${
                  images[currentImage].border ? 'border border-white' : ''
                }`}
                style={{
                  transform: `scale(${images[currentImage].zoom})`,
                  objectPosition: images[currentImage].position || '50% 50%',
                }}
              />
            </button>

            {/* Navigation dots */}
            <div
              className="mt-3 flex items-center gap-3 md:mt-6"
              aria-label="Choose calendar image"
            >
              {images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={currentImage === index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? 'scale-125 bg-white'
                      : 'bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-5 md:hidden">
              <Button href="/order">
                Order now ↗
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 transition-opacity duration-700 ${
          showAbout
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <Footer />
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => setShowAbout(false)}
        aria-label="Back to top"
        className={`absolute bottom-8 right-6 z-20 flex h-12 w-12 items-center justify-center border border-white text-2xl font-light transition-all duration-500 hover:bg-white hover:text-calendar-blue md:bottom-10 md:right-10 ${
          showAbout
            ? 'animate-back-to-top translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        ↑
      </button>
    </main>
  )
}

export default App
