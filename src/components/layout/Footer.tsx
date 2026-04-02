'use client'

export default function Footer() {
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
              src="/logo.svg"
              alt="Plenvira Logo"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  const fallback = document.createElement('div')
                  fallback.innerHTML = `
                    <svg viewBox="0 0 36 36" fill="none" class="w-8 h-8">
                      <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="none" stroke="#F97316" strokeWidth="1.5"/>
                      <text x="18" y="22" text-anchor="middle" fill="#F97316" font-size="10" font-family="Orbitron" font-weight="700">P</text>
                    </svg>
                  `
                  parent.appendChild(fallback.firstChild as Node)
                }
              }}
            />
            <span
              className="text-base font-bold tracking-widest uppercase"
              style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)' }}
            >
              Plenvira
            </span>
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