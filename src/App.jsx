
import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Order from './pages/Order'
import Button from './components/layout/ui/Button'

import januaryImage from './assets/images/jan.svg'
import livingRoomImage from './assets/images/livingroom.png'
import officeImage from './assets/images/office.png'

const images = [
  {
    src: januaryImage,
    alt: 'January 2027 calendar page',
    border: true,
    zoom: 1,
  },
  {
    src: livingRoomImage,
    alt: 'Calendar in an industrial living room',
    border: false,
    zoom: 1,
  },
  {
    src: officeImage,
    alt: 'Calendar in an industrial office',
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

  // Display the order page when the URL is /order
  if (window.location.pathname === '/order') {
    return <Order />
  }

  return (
    <main
      id="home"
      className="relative h-screen overflow-hidden bg-calendar-blue font-outfit text-white"
    >

      {/* Navbar - visible only on Home */}
      <div
        className={`absolute inset-x-0 top-0 z-30 transition-all duration-700 ${
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

        {/* Hero section */}
        <section className="flex h-full flex-col items-center justify-center px-6">
          <div
            className={`flex flex-col items-center transition-all duration-1000 ${
              showAbout
                ? '-translate-y-16 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            <h1 className="max-w-4xl text-center text-5xl font-light leading-tight tracking-tight sm:text-6xl md:text-7xl">
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

              <span className="animate-arrow-flow mt-5 text-3xl font-light">
                ↓
              </span>
            </div>
          </div>
        </section>

        {/* About section */}
        <section
          id="about"
          className="grid h-full grid-cols-1 items-center gap-8 overflow-hidden px-6 py-8 md:mx-auto md:max-w-[1200px] md:grid-cols-2 md:gap-12 md:py-10"
        >

          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              showAbout
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            <h2 className="mb-6 text-4xl font-light leading-tight md:mb-8 md:text-5xl">
              A calendar that makes you think.
            </h2>

            <p className="max-w-md text-base font-light leading-relaxed opacity-80">
              A minimalist wall calendar where every detail has its place. A striking blue, crisp white typography and a timeless aesthetic make this calendar more than just a way to keep track of days. It's a statement piece for your space.
            </p>

            <Button href="/order" className="mt-8 md:mt-10">
              Order now ↗
            </Button>
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
                setCurrentImage((currentImage + 1) % images.length)
              }
              aria-label="Show next calendar image"
              className="relative aspect-[4/5] w-[90%] cursor-pointer overflow-hidden"
            >
              <img
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
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
            <div className="mt-6 flex items-center gap-3">
              {images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={currentImage === index ? 'true' : undefined}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? 'scale-125 bg-white'
                      : 'bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Back to top button */}
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
