function Button({ href, children, className = '', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-block border border-white px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-calendar-blue ${className}`}
    >
      {children}
    </a>
  )
}

export default Button