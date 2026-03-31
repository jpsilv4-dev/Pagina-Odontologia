import { clinicaConfig } from '../../config/clinicaConfig'
import { Button } from '../common'
import { MessageCircle } from 'lucide-react'

export function HeroSection() {
  const phoneNumber = clinicaConfig.whatsapp
  const message = encodeURIComponent(
    'Olá! Gostaria de agendar uma consulta na Clinical Atelier.'
  )
  const whatsappLink = `https://wa.me/55${phoneNumber}?text=${message}`

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F7FAFC] to-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="order-2 md:order-1">
            <div className="inline-block bg-[#4FD1C5] text-[#1A365D] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              EXCELÊNCIA É PRECISAR ✨
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A365D] mb-4 leading-tight">
              Seu sorriso é nossa <span className="text-[#4FD1C5]">obra de arte</span>
            </h1>

            <p className="text-lg text-[#2D3748] mb-8 leading-relaxed">
              Combinamos tecnologia de ponta com uma abordagem artística para criar resultados que transcendem a odontologia tradicional. Bem-vindo à nossa estética dental.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={20} />
                  Agendar Consulta
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-[#4FD1C5]">5.000+</div>
                <p className="text-sm text-[#2D3748] whitespace-nowrap">Sorrisos transformados</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-[#4FD1C5]">38</div>
                <p className="text-sm text-[#2D3748] whitespace-nowrap">Anos de excelência</p>
              </div>
            </div>
          </div>

          {/* Imagem Placeholder com gradiente */}
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Placeholder de imagem com gradiente similar à da página de referência */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D] via-[#4FD1C5] to-[#2D3748] opacity-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop"
                  alt="Clínica Odontológica"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card de destaque com 5000+ */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4FD1C5] rounded-full flex items-center justify-center flex-shrink-0">
                    ✅
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#1A365D]">5.000+</div>
                    <p className="text-xs text-[#2D3748]">Sorrisos transformados com precisão e segurança</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
