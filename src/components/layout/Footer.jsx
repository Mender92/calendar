
function Footer() {
  return (
    <footer className="w-full px-6 py-5 text-center text-xs font-light text-white/70">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        <span>© 2026 Calendar. All rights reserved.</span>

        <span className="text-white/40">·</span>

        <a
          href="https://www.instagram.com/domen_kjuder/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-60"
        >
          Instagram ↗
        </a>
      </div>
    </footer>
  )
}

export default Footer
