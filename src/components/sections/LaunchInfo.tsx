'use client'

export default function LaunchInfo() {
  return (
    <section id="launch" className="py-20 relative overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-heavy rounded-2xl p-12 md:p-16 text-center" style={{ border: '1px solid rgba(249,115,22,0.2)' }}>
          <div 
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)' }}
          >
            <span
              className="text-sm font-medium uppercase tracking-widest"
              style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--accent)' }}
            >
              View Demo
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)' }}
          >
            See the Finished Product
          </h2>

          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--subtext)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
          >
            Experience the full Plenvira platform with all features, dashboard, and gamified learning. Click below to explore the live demo.
          </p>

          <a
            href="https://viras-finance-hub.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <span>Explore Demo</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p
            className="text-sm mt-6"
            style={{ color: 'var(--muted)', fontFamily: 'Rajdhani, sans-serif' }}
          >
            Early access sign-ups launching soon
          </p>
        </div>
      </div>
    </section>
  )
}