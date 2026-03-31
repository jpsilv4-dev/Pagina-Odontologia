import { clinicaConfig } from '../../config/clinicaConfig'
import { Button } from '../common'
import { MessageCircle } from 'lucide-react'

export function CTASection() {
  const phoneNumber = clinicaConfig.whatsapp
  const message = encodeURIComponent(
    'Olá! Gostaria de marcar uma consulta na Clinical Atelier.'
  )
  const whatsappLink = `https://wa.me/55${phoneNumber}?text=${message}`

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[#1A365D] via-[#0f1f3a] to-[#2D3748] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#4FD1C5] opacity-10 rounded-full blur-3xl -translate-x-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4FD1C5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Pronto para sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] to-[#30a3c8]">obra de arte</span>?
          </h2>

          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Agende uma avaliação personalizada com nossos especialistas e descubra as possibilidades ilimitadas para transformar seu sorriso.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button
              variant="tertiary"
              size="lg"
              className="transform hover:scale-110 shadow-2xl hover:shadow-3xl"
            >
              <MessageCircle size={20} />
              Agendar Agora
            </Button>
          </a>

          {/* Trust indicators */}
          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#4FD1C5]/50 transition">
              <p className="text-2xl font-bold text-[#4FD1C5] mb-1">💬</p>
              <p className="text-sm font-medium">Resposta rápida</p>
              <p className="text-xs text-gray-400">até 2 horas</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#4FD1C5]/50 transition">
              <p className="text-2xl font-bold text-[#4FD1C5] mb-1">🔒</p>
              <p className="text-sm font-medium">Dados seguro</p>
              <p className="text-xs text-gray-400">100% privado</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#4FD1C5]/50 transition">
              <p className="text-2xl font-bold text-[#4FD1C5] mb-1">⭐</p>
              <p className="text-sm font-medium">Avaliação grátis</p>
              <p className="text-xs text-gray-400">sem compromisso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
