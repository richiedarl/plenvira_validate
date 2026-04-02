import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Pillars from '../components/sections/Pillars'
import HowItWorks from '../components/sections/HowItWorks'
import LaunchInfo from '../components/sections/LaunchInfo'
import SignupForm from '../components/sections/SignupForms'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pillars />
      <HowItWorks />
      <LaunchInfo />
      <SignupForm />
      <Footer />
    </main>
  )
}