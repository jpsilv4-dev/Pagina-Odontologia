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
    <section className="py-20 px-4 bg-gradient-to-r from-[#1A365D] to-[#2D3748]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para sua obra de arte?
        </h2>

        <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Agende uma avaliação personalizada com nossos especialistas e descubra as possibilidades para seu sorriso.
        </p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button
            variant="tertiary"
            size="lg"
            className="transform hover:scale-110"
          >
            <MessageCircle size={20} />
            Agendar Agora
          </Button>
        </a>

        <p className="mt-8 text-sm text-gray-300">
          💬 Responderemos em até 2 horas | 🔒 Dados seguros e privados
        </p>
      </div>
    </section>
  )
}
