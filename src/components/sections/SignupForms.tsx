import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  incomeRange: string
  interest: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const incomeRanges = [
  { value: '', label: 'Select income range (optional)' },
  { value: 'under-25k', label: 'Under $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-75k', label: '$50,000 - $75,000' },
  { value: '75k-100k', label: '$75,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
]

const interests = [
  { value: '', label: 'Select primary interest (optional)' },
  { value: 'money-management', label: 'Money Management' },
  { value: 'personal-growth', label: 'Personal Growth' },
  { value: 'career-direction', label: 'Career Direction' },
]

export default function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    incomeRange: '',
    interest: '',
  })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    if (!formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setStatus({ type: 'loading', message: 'Submitting...' })

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thanks for signing up! We\'ll be in touch.' })
        setFormData({ name: '', email: '', incomeRange: '', interest: '' })
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to submit. Please try again.' })
    }
  }

  return (
    <section id="signup-form" className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Early Access</h2>
            <p className="text-text/70">
              Be among the first to experience Plenvira when it launches.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border border-text/20 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border border-text/20 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="incomeRange" className="block text-sm font-medium mb-2">
                Monthly Income Range
              </label>
              <select
                id="incomeRange"
                name="incomeRange"
                value={formData.incomeRange}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border border-text/20 rounded-lg focus:outline-none focus:border-secondary transition-colors"
              >
                {incomeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium mb-2">
                Primary Interest
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border border-text/20 rounded-lg focus:outline-none focus:border-secondary transition-colors"
              >
                {interests.map((interest) => (
                  <option key={interest.value} value={interest.value}>
                    {interest.label}
                  </option>
                ))}
              </select>
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : status.type === 'error'
                    ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                    : 'bg-secondary/10 text-secondary'
                }`}
              >
                {status.message}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status.type === 'loading'}
              className="w-full"
            >
              {status.type === 'loading' ? 'Submitting...' : 'Get Early Access'}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}