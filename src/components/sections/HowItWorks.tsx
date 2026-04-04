'use client'

const steps = [
  {
    num: '01',
    title: 'Log Your Money',
    desc: 'Track income and expenses daily with simple categorized inputs. 3 Viras per session after your free trial.',
    color: '#F97316',
  },
  {
    num: '02',
    title: 'See Reality',
    desc: 'Your dashboard surfaces burn rate, budget adherence, and where money actually goes — in real time.',
    color: '#3B82F6',
  },
  {
    num: '03',
    title: 'Play the Game',
    desc: 'Face real financial scenarios. Choose wisely. Score 70%+ and earn Viras. Learn from every decision.',
    color: '#F59E0B',
  },
  {
    num: '04',
    title: 'Apply & Grow',
    desc: 'Carry your trained instincts into real life. Build goals, run simulations, and watch your finances transform.',
    color: '#10B981',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)', 
          filter: 'blur(80px)',
          opacity: 0.15
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: 'var(--secondary)' }} />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--secondary)' }}
            >
              The Loop
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)' }}
          >
            How It Works
          </h2>
        </div>

        {/* Steps — horizontal connected */}
        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div
            className="absolute top-8 left-[12.5%] right-[12.5%] h-px hidden md:block"
            style={{ background: 'linear-gradient(90deg, rgba(249,115,22,0.3), rgba(59,130,246,0.3), rgba(245,158,11,0.3), rgba(16,185,129,0.3))' }}
          />

          {steps.map(({ num, title, desc, color }, i) => (
            <div key={num} className="relative flex flex-col items-center text-center px-6">
              {/* Number circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 hover:scale-110"
                style={{
                  background: `${color}20`,
                  border: `1px solid ${color}40`,
                  boxShadow: `0 0 20px ${color}20`,
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ fontFamily: 'Orbitron, monospace', color }}
                >
                  {num}
                </span>
              </div>

              <h3
                className="text-base font-bold mb-3"
                style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)', fontSize: '0.9rem' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--subtext)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
              >
                {desc}
              </p>

              {/* Arrow between (mobile only) */}
              {i < steps.length - 1 && (
                <div className="md:hidden text-2xl my-4" style={{ color: 'var(--muted)' }}>↓</div>
              )}
            </div>
          ))}
        </div>

        {/* Viras call-out banner */}
        <div
          className="mt-20 glass-heavy rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ border: '1px solid rgba(249,115,22,0.2)' }}
        >
          <div className="flex items-center gap-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 25,8 25,20 14,26 3,20 3,8" stroke="#F97316" strokeWidth="1.5" fill="rgba(249,115,22,0.1)"/>
                <text x="14" y="18" textAnchor="middle" fill="#F97316" fontSize="12" fontFamily="Orbitron" fontWeight="700">V</text>
              </svg>
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ fontFamily: 'Orbitron, monospace', color: 'var(--text)', fontSize: '1rem' }}
              >
                The Viras Economy
              </h3>
              <p
                className="text-sm"
                style={{ color: 'var(--subtext)', fontFamily: 'Rajdhani, sans-serif' }}
              >
                Every action on Plenvira is powered by Viras — our platform currency. Earn through games, spend to unlock features.
              </p>
              <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '0.5rem' }}>
                <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem' }}>
                  500 Viras = $1.30 USD
                </div>
                <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginTop: '0.25rem' }}>
                  ≈ ₦2,000
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <div className="badge-orange px-4 py-2 text-sm">Earn Playing</div>
            <div className="badge-blue px-4 py-2 text-sm">Spend to Act</div>
          </div>
        </div>
      </div>
    </section>
  )
}