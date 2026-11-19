
import logo from '../../assets/images/logo.svg'

function Navbar() {
  const today = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date())

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto grid max-w-[1200px] grid-cols-3 items-center px-6 py-6">

        {/* Logo */}
        <a href="/" aria-label="Calendar homepage">
          <img
            src={logo}
            alt="Calendar logo"
            className="h-14 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-8 text-sm">
          <a
            href="/"
            className="transition-opacity hover:opacity-60"
          >
            Home
          </a>

          <a
            href="/order"
            className="transition-opacity hover:opacity-60"
          >
            Order
          </a>
        </nav>

        {/* Current date */}
        <time
          dateTime={new Date().toISOString().split('T')[0]}
          className="hidden text-right text-sm sm:block"
        >
          {today}
        </time>

      </div>
    </header>
  )
}

export default Navbar
