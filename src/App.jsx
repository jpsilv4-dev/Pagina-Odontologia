import { Header } from './components/layout'
import {
  HeroSection,
  DifferencesSection,
  ServicesSection,
  AboutSection,
  CTASection,
  Footer
} from './components/sections'
import { WhatsAppButton } from './components/common'

function App() {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Differences Section */}
        <DifferencesSection />

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <div id="sobre">
          <AboutSection />
        </div>

        {/* CTA Section */}
        <div id="contato">
          <CTASection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default App
