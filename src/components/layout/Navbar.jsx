
import logo from '../../assets/images/logo.svg'

function Navbar() {
  const today = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date())

  return (
    <header className="w-full bg-calendar-blue">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[auto_1fr_auto] items-center px-5 py-5 sm:px-6 sm:py-6">

        {/* Logo */}
        <a href="/" aria-label="Calendar homepage">
          <img
            src={logo}
            alt="Calendar logo"
            className="h-10 w-auto sm:h-14"
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-5 text-xs sm:gap-8 sm:text-sm">
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
