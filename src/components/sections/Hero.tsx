'use client'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute top-0 right-1/3 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(180deg, transparent, #F97316, transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — copy */}
          <div className="relative z-10">
            {/* Pre-badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="live-dot" />
              <span
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--accent)' }}
              >
                Now Accepting Early Access
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up"
              style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '-0.02em', color: 'var(--text)' }}
            >
              <span>Control</span>
              <br />
              <span style={{ color: 'var(--accent)' }} className="glow-orange">Your Money.</span>
              <br />
              <span>Shape</span>
              <br />
              <span style={{ color: 'var(--subtext)' }}>Your Future.</span>
            </h1>

            <p
              className="text-base md:text-lg mb-4 max-w-md leading-relaxed"
              style={{ color: 'var(--subtext)', fontFamily: 'Rajdhani, sans-serif', fontSize: '1.1rem', fontWeight: 400 }}
            >
              Plenvira combines finance tracking, goal setting, and{' '}
              <span style={{ color: 'var(--accent)' }}>gamified decision training</span>{' '}
              to rewire how you think about money.
            </p>

            <p
              className="text-sm mb-10"
              style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.02em' }}
            >
              Track → Simulate → Learn → Win
            </p>

            {/* Stats row */}
            <div className="flex gap-6 mb-10">
              {[
                { val: '4',     label: 'Growth Phases'      },
                { val: 'Viras', label: 'Platform Currency'  },
                { val: 'PWA',   label: 'Web & Mobile'       },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div
                    className="text-xl font-bold"
                    style={{ fontFamily: 'Orbitron, monospace', color: 'var(--accent)' }}
                  >
                    {val}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider mt-0.5"
                    style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToForm} className="btn-primary">
                <span>Get Early Access</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#how-it-works" className="btn-ghost">
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="relative z-10 flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{ boxShadow: '0 0 80px rgba(249,115,22,0.4)', transform: 'scale(1.05)' }}
              />

              <div
                className="relative glass-heavy rounded-2xl p-6 w-full max-w-sm scanline"
                style={{ border: '1px solid rgba(249,115,22,0.25)' }}
              >
                {/* Top bar */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--muted)' }}
                    >
                      Dashboard
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)' }}
                    >
                      March 2025
                    </div>
                  </div>
                  <span className="badge-orange">
                    <span className="live-dot" style={{ width: '6px', height: '6px' }} />
                    Live
                  </span>
                </div>

                {/* Balance */}
                <div
                  className="stat-card mb-4"
                  style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)' }}
                >
                  <div
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--muted)' }}
                  >
                    Net Balance
                  </div>
                  <div
                    className="text-3xl font-bold"
                    style={{ fontFamily: 'Orbitron, monospace', color: 'var(--accent)' }}
                  >
                    ₦142,800
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}>
                    (~$93 USD)
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}>
                    (~$93 USD)
                  </div>
                  <div className="xp-bar mt-2">
                    <div className="xp-bar-fill" style={{ width: '68%' }} />
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}>
                    68% of monthly goal
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Income',   val: '₦280k', usd: '~$182 USD', positive: true  },
                    { label: 'Expenses', val: '₦137k', usd: '~$89 USD', positive: false },
                  ].map(({ label, val, usd, positive }) => (
                    <div
                      key={label}
                      className="rounded-lg p-3"
                      style={{ background: 'rgba(11,31,58,0.8)', border: '1px solid rgba(249,115,22,0.1)' }}
                    >
                      <div
                        className="text-xs uppercase tracking-wider mb-1"
                        style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--muted)' }}
                      >
                        {label}
                      </div>
                      <div
                        className="font-bold"
                        style={{
                          fontFamily: 'Orbitron, monospace',
                          color: positive ? '#10B981' : 'var(--accent)',
                          fontSize: '1rem',
                        }}
                      >
                        {val}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}>
                        {usd}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Viras balance */}
                <div
                  className="flex items-center justify-between rounded-lg px-4 py-3"
                  style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
                >
                  <div>
                    <div
                      className="text-xs uppercase tracking-wider"
                      style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--muted)' }}
                    >
                      Viras Balance
                    </div>
                    <div
                      className="font-bold mt-0.5"
                      style={{ fontFamily: 'Orbitron, monospace', color: 'var(--secondary)', fontSize: '1rem' }}
                    >
                      2,450 VRS
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <polygon points="9,1 16.5,5 16.5,13 9,17 1.5,13 1.5,5" stroke="#3B82F6" strokeWidth="1.2" fill="rgba(37,99,235,0.2)"/>
                      <text x="9" y="12" textAnchor="middle" fill="#3B82F6" fontSize="7" fontFamily="Orbitron" fontWeight="700">V</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating chip — goal */}
              <div
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg"
                style={{ border: '1px solid rgba(16,185,129,0.3)', minWidth: '180px' }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16,185,129,0.15)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif', color: '#10B981' }}>Goal reached!</div>
                  <div className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}>+150 Viras earned</div>
                </div>
              </div>

              {/* Floating chip — game */}
              <div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg"
                style={{ border: '1px solid rgba(249,115,22,0.3)', minWidth: '170px' }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.15)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="2" y="5" width="10" height="6" rx="1.5" stroke="#F97316" strokeWidth="1.2"/>
                    <path d="M5 3V2M9 3V2" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round"/>
                    <circle cx="5" cy="8" r="0.8" fill="#F97316"/>
                    <circle cx="9" cy="8" r="0.8" fill="#F97316"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--accent)' }}>Daily Game</div>
                  <div className="text-xs" style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}>Score: 84% ↑</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider" />
    </section>
  )
}