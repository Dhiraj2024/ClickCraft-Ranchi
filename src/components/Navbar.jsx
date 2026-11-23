import { useState, useEffect } from 'react'
import { Code as Code2, Menu, X, Phone } from 'lucide-react'
import { callLink } from '../config/contact'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-slate-200 shadow-sm'
          : 'bg-white/60 backdrop-blur-sm border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-electric-400 shadow-md">
            <Code2 className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy-900 sm:text-xl">
            ClickCraft <span className="text-electric-600">Ranchi</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={callLink}
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-electric-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-electric-600/25 transition-all hover:bg-electric-700 hover:shadow-lg hover:shadow-electric-600/30"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-navy-900 transition-colors hover:bg-navy-50 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={callLink}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-electric-700"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}
