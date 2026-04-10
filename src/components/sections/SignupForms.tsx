import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function SignupForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isModalOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <>
      <section id="signup-form" className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Early Testing
              </h2>
              <p className="text-text/70 text-lg mb-3">
                We're working with a small group (30 people) to understand how people actually manage money.
              </p>
              <div className="inline-block bg-secondary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-secondary">
                Limited to 30 participants • Takes 3 minutes
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="primary" 
                size="lg"
                className="text-lg px-8"
              >
                Apply for Early Access →
              </Button>
              
              <p className="text-sm text-text/50 mt-6">
                No spam • Unsubscribe anytime • Your feedback shapes the product
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-primary rounded-2xl shadow-2xl w-full max-w-2xl h-[85vh] overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Loading indicator */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
                    <p className="text-text/70">Loading form...</p>
                  </div>
                </div>
              )}
              
              {/* Tally Form iframe */}
              <iframe 
                src="https://tally.so/r/NpJoEG"
                width="100%" 
                height="100%"
                frameBorder="0"
                title="Plenvira Early Access Application"
                className="bg-white"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}