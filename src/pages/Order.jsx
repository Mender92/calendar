
import Navbar from '../components/layout/Navbar'

function Order() {
  return (
    <main className="flex min-h-screen flex-col bg-calendar-blue font-outfit text-white">

      <Navbar />

      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">

        <h1 className="mb-12 text-5xl font-light leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Let's make it yours.
        </h1>

        <a
          href="https://www.instagram.com/domen_kjuder/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-calendar-blue"
        >
          Order Now ↗
        </a>

      </section>

    </main>
  )
}

export default Order
