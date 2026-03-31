import { MessageCircle } from 'lucide-react'
import { clinicaConfig } from '../../config/clinicaConfig'

export function WhatsAppButton() {
  const phoneNumber = clinicaConfig.whatsapp
  const message = encodeURIComponent(
    `Olá! Vi seu site e gostaria de agendar uma avalição. Poderiam me ajudar?`
  )
  const whatsappLink = `https://wa.me/55${43988238449}?text=${message}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center gap-2 group"
      aria-label="Conversar via WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden group-hover:inline text-sm font-semibold whitespace-nowrap pr-2">
        Agendar
      </span>
    </a>
  )
}
