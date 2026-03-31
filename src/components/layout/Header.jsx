import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { clinicaConfig } from '../../config/clinicaConfig'
import { Button } from '../common'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ]

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-lg z-30 border-b border-[#4FD1C5]/10">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo com mais estilo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 bg-gradient-to-br from-[#4FD1C5] to-[#30a3c8] rounded-xl flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
            🦷
          </div>
          <span className="font-bold text-lg text-[#1A365D] hidden sm:inline group-hover:text-[#4FD1C5] transition">
            {clinicaConfig.nome}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigationLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-[#2D3748] hover:text-[#4FD1C5] transition-colors font-semibold text-sm relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4FD1C5] to-[#30a3c8] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-6">
          <a href={`tel:${clinicaConfig.telefone}`} className="flex items-center gap-2 text-[#2D3748] hover:text-[#4FD1C5] font-semibold transition">
            <Phone size={18} />
            <span className="text-sm">{clinicaConfig.telefone}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-[#4FD1C5]/10 rounded-lg transition text-[#1A365D]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t-2 border-[#4FD1C5]/20 py-6 px-4 animate-slide-in-up">
          <div className="space-y-3">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-[#2D3748] hover:text-[#4FD1C5] hover:bg-[#4FD1C5]/5 transition font-semibold py-3 px-4 rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <hr className="my-4 border-[#4FD1C5]/20" />
            <a href={`tel:${clinicaConfig.telefone}`} className="block text-[#1A365D] font-bold py-3 px-4 rounded-lg bg-[#4FD1C5]/10">
              📞 {clinicaConfig.telefone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
