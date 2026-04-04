'use client'
import { useState, useEffect } from 'react'

export default function Footer() {
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

  return (
    <footer
      className="py-12 relative"
      style={{ borderTop: '1px solid rgba(249,115,22,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={isDark ? '/images/logowhite.png' : '/images/logoblack.png'}
              alt="Plenvira Logo"
              className="w-12 h-12 object-contain"
            />
            {/* <span
              className="text-base font-bold tracking-widest uppercase"
              style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)' }}
            >
              Plenvira
            </span> */}
          </div>

          {/* Tagline */}
          <p
            className="text-sm text-center"
            style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}
          >
            Track → Simulate → Learn → Win
          </p>

          {/* Legal */}
          <p
            className="text-xs"
            style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}
          >
            © {new Date().getFullYear()} Plenvira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}