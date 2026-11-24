
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/layout/SEO'

function Order() {
  return (
    <main className="flex min-h-screen flex-col bg-calendar-blue font-outfit text-white">
      <SEO
        title="About the Project | 2027 Calendar"
        description="A minimalist 2027 wall calendar. Discover the ideas behind its simplicity, distinctive blue colour and thoughtful design."
        path="/about"
      />

      <Navbar />

      <section className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 py-20 sm:px-10 sm:py-24">

        {/* Main heading */}
        <h1 className="mb-16 text-center text-4xl font-light leading-tight tracking-tight sm:mb-20 sm:text-6xl md:text-7xl">
          A calendar that makes you think.
        </h1>

        {/* Three columns */}
        <div className="mx-auto grid w-full max-w-[900px] grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-16">

          {/* 01 — Simplicity */}
          <div>
            <h2 className="mb-5 text-sm font-normal tracking-wide sm:text-base">
              01 — Simplicity
            </h2>

            <div className="mb-5 h-px w-full bg-white/70" />

            <p className="max-w-sm text-sm font-light leading-relaxed opacity-80 sm:text-base">
              The idea was create a calendar without unnecessary distractions. No visual clutter, no unnecessary details. Just typography, space and a clear purpose - to make you think about time.
            </p>
          </div>

          {/* 02 — The colour */}
          <div>
            <h2 className="mb-5 text-sm font-normal tracking-wide sm:text-base">
              02 — The colour
            </h2>

            <div className="mb-5 h-px w-full bg-white/70" />

            <p className="max-w-sm text-sm font-light leading-relaxed opacity-80 sm:text-base">
              The deep electric blue is the defining element of the calendar. Blue is often associated with calmness and stability, but this particular shade adds a more energetic character.
            </p>
          </div>

          {/* 03 — The object */}
          <div>
            <h2 className="mb-5 text-sm font-normal tracking-wide sm:text-base">
              03 — The object
            </h2>

            <div className="mb-5 h-px w-full bg-white/70" />

            <p className="max-w-sm text-sm font-light leading-relaxed opacity-80 sm:text-base">
              A simple everyday object in A5 format, designed to become part of your space.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center sm:mt-20">
          <a
            href="https://www.instagram.com/domen_kjuder/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get the 2027 calendar via Instagram"
            className="border border-white px-12 py-4 text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-calendar-blue"
          >
            Get It
          </a>
        </div>

      </section>

      <Footer />
    </main>
  )
}

export default Order
