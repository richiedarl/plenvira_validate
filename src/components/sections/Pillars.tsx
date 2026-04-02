'use client'

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 16l4-6 4 4 4-8" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Track Everything',
    tag: 'Phase 1',
    tagColor: 'badge-orange',
    desc: 'Log income and expenses in seconds. Get real-time visibility into your daily, weekly, and monthly spending — broken down by category.',
    detail: '3 Viras per action',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Plan Smarter',
    tag: 'Phase 2',
    tagColor: 'badge-blue',
    desc: 'Build budgets, set goals, and run "what if" simulations before making major financial or life decisions. Know the outcome before you commit.',
    detail: '10 Viras per plan',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="9" width="18" height="12" rx="2" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M8 9V7a4 4 0 018 0v2" stroke="#F59E0B" strokeWidth="1.5"/>
        <circle cx="12" cy="15" r="2" fill="#F59E0B"/>
      </svg>
    ),
    title: 'Train Decisions',
    tag: 'Game',
    tagColor: 'badge-orange',
    desc: 'The Daily Decision Game presents real-life scenarios — food, transport, purchases. Make the right call, earn Viras. Miss, and learn why.',
    detail: 'Earn Viras on 70%+ score',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="#10B981" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Build Habits',
    tag: 'Phase 3',
    tagColor: 'badge-green',
    desc: 'Streak challenges, card strategy games, and habit tracking make consistent financial behavior addictive — not a chore.',
    detail: 'Unlock as you grow',
  },
]

export default function Pillars() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#F97316' }} />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: 'Rajdhani, sans-serif', color: '#F97316' }}
            >
              Core Pillars
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight"
            style={{ fontFamily: 'Orbitron, monospace', color: '#F0F4FF' }}
          >
            One Platform.
            <br />
            <span style={{ color: '#F97316' }}>Four Superpowers.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {pillars.map(({ icon, title, tag, tagColor, desc, detail }, i) => (
            <div
              key={title}
              className="card p-6 group cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(11,31,58,0.9)', border: '1px solid rgba(249,115,22,0.15)' }}
              >
                {icon}
              </div>

              {/* Tag */}
              <span className={`${tagColor} mb-3 inline-flex`}>{tag}</span>

              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: 'Orbitron, monospace', color: '#F0F4FF', fontSize: '1rem' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: '#8BA3C7', fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', fontWeight: 400 }}
              >
                {desc}
              </p>

              {/* Footer detail */}
              <div
                className="text-xs pt-4 mt-auto"
                style={{
                  color: '#4A6585',
                  fontFamily: 'Rajdhani, sans-serif',
                  borderTop: '1px solid rgba(249,115,22,0.08)',
                  letterSpacing: '0.05em',
                }}
              >
                {detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}