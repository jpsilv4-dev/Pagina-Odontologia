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
    <section className="min-h-screen bg-gradient-to-b from-[#F7FAFC] via-white to-[#f0f9ff] flex items-center pt-24 sm:pt-20 overflow-hidden relative">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 right-0 w-40 h-40 sm:w-72 sm:h-72 bg-[#4FD1C5] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-[#1A365D] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-[#4FD1C5] to-[#30a3c8] text-[#1A365D] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-md hover:shadow-lg transition-shadow">
              ✨ EXCELÊNCIA EM CADA DETALHE
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A365D] mb-4 sm:mb-6 leading-tight">
              Seu sorriso é nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] to-[#30a3c8]">obra de arte</span>
            </h1>

            <p className="text-base sm:text-lg text-[#2D3748] mb-6 sm:mb-8 leading-relaxed font-light">
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
            <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-8 flex-wrap">
              <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-[#4FD1C5]/10 to-transparent border-l-4 border-[#4FD1C5]">
                <div className="text-2xl sm:text-3xl font-bold text-[#4FD1C5]">5.000+</div>
                <p className="text-xs sm:text-sm text-[#2D3748] whitespace-nowrap font-medium">Sorrisos transformados</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-[#4FD1C5] to-transparent"></div>
              <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-[#1A365D]/10 to-transparent border-l-4 border-[#1A365D]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1A365D]">38</div>
                <p className="text-xs sm:text-sm text-[#2D3748] whitespace-nowrap font-medium">Anos de excelência</p>
              </div>
            </div>
          </div>

          {/* Imagem com efeitos */}
          <div className="order-1 md:order-2 animate-slide-in-right">
            <div className="relative group">
              {/* Orbe de luz animada */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4FD1C5] via-[#30a3c8] to-[#1A365D] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* Imagem principal */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D]/20 via-[#4FD1C5]/10 to-transparent z-5"></div>
                <img
                  src="/assets/mulher.png"
                  alt="Clínica Odontológica Moderna"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card de destaque com mais estilo */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-[#4FD1C5]/20 hover:shadow-3xl transition-all">
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
