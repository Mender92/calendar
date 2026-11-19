
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/layout/SEO'

function Order() {
  return (
    <main className="flex min-h-screen flex-col bg-calendar-blue font-outfit text-white">
      <SEO
        title="Order the 2027 Minimalist Wall Calendar | Calendar"
        description="Make 2027 awesome. Discover and order the minimalist 2027 wall calendar, featuring bold blue design and crisp white typography."
        path="/order"
      />

      <Navbar />

      <section
        aria-labelledby="order-heading"
        className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center"
      >
        <h1
          id="order-heading"
          className="mb-12 text-5xl font-light leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          Let's make it yours.
        </h1>

        <a
          href="https://ig.me/m/domen_kjuder"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order the 2027 calendar via Instagram"
          className="border border-white px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-calendar-blue"
        >
          Order via Instagram ↗
        </a>
      </section>

      <Footer />
    </main>
  )
}

export default Order
