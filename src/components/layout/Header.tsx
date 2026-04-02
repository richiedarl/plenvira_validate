'use client'
import { useState, useEffect } from 'react'
import ThemeToggle from '../ui/Themetoggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('light-theme') === false
    setIsDark(isDarkMode)

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('light-theme') === false
      setIsDark(isDarkMode)
    })

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive sizing */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
            <img
              src={isDark ? '/images/logowhite.png' : '/images/logoblack.png'}
              alt="Plenvira Logo"
              className="logo-icon"
            />
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'How It Works', 'Launch'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm uppercase tracking-widest transition-colors duration-200"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  color: 'var(--subtext)',
                  letterSpacing: '0.1em'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--subtext)')}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA + Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={scrollToForm}
              className="btn-primary hidden md:inline-flex text-xs"
            >
              <span>Get Early Access</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="block h-px w-6 transition-all duration-300"
                  style={{
                    background: 'var(--accent)',
                    transform: menuOpen
                      ? i === 0
                        ? 'rotate(45deg) translate(3px, 3px)'
                        : i === 1
                        ? 'scaleX(0)'
                        : 'rotate(-45deg) translate(3px, -3px)'
                      : 'none'
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-64 pt-4' : 'max-h-0'
          }`}
        >
          <div className="glass rounded-lg p-4 flex flex-col gap-4">
            {['Features', 'How It Works', 'Launch'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm uppercase tracking-widest"
                style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--subtext)' }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button onClick={scrollToForm} className="btn-primary text-xs mt-2">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}