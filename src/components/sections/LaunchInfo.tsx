import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function LaunchInfo() {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="launch" className="py-20 bg-gradient-to-b from-primary/50 to-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            Coming Soon
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Launching June 22nd</h2>
          <p className="text-xl text-text/70 mb-8">
            Early version available in 2 weeks. Be the first to experience Plenvira.
          </p>
          <Button size="lg" onClick={scrollToForm}>
            Get Early Access
          </Button>
        </div>
      </Container>
    </section>
  )
}