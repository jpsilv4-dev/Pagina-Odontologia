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
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-30">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#4FD1C5] rounded-lg flex items-center justify-center font-bold text-[#1A365D]">
            CA
          </div>
          <span className="font-bold text-[#1A365D] hidden sm:inline">
            {clinicaConfig.nome}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-[#2D3748] hover:text-[#4FD1C5] transition font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${clinicaConfig.telefone}`} className="flex items-center gap-2 text-[#2D3748] hover:text-[#1A365D]">
            <Phone size={20} />
            <span className="text-sm">{clinicaConfig.telefone}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <div className="space-y-4">
            {navigationLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-[#2D3748] hover:text-[#4FD1C5] transition font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <hr className="my-4" />
            <a href={`tel:${clinicaConfig.telefone}`} className="block text-[#1A365D] font-semibold">
              {clinicaConfig.telefone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
