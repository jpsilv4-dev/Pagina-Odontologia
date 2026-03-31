import { clinicaConfig } from '../../config/clinicaConfig'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { endereco } = clinicaConfig

  return (
    <footer className="bg-[#1A365D] text-white">
      {/* Google Maps + Informações */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mapa */}
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src={clinicaConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              ></iframe>
            </div>

            {/* Informações de Contato */}
            <div>
              <h3 className="text-3xl font-bold mb-8">
                {clinicaConfig.nome}
              </h3>

              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-[#4FD1C5] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Localização</p>
                    <p className="text-gray-300">
                      {endereco.rua}, {endereco.bairro}
                    </p>
                    <p className="text-gray-300">
                      {endereco.cidade} - {endereco.estado} | {endereco.cep}
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-[#4FD1C5] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Telefone</p>
                    <a
                      href={`tel:${clinicaConfig.telefone}`}
                      className="text-gray-300 hover:text-[#4FD1C5] transition"
                    >
                      {clinicaConfig.telefone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-[#4FD1C5] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">E-mail</p>
                    <a
                      href={`mailto:${clinicaConfig.email}`}
                      className="text-gray-300 hover:text-[#4FD1C5] transition"
                    >
                      {clinicaConfig.email}
                    </a>
                  </div>
                </div>

                {/* Redes Sociais (placeholder) */}
                <div className="pt-6 border-t border-gray-700">
                  <p className="font-semibold mb-4">Siga-nos</p>
                  <div className="flex gap-4">
                    {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#4FD1C5] text-[#1A365D] flex items-center justify-center hover:bg-white transition"
                        aria-label={social}
                      >
                        {social[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} {clinicaConfig.nome}. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <a href="#" className="hover:text-[#4FD1C5] transition">Política de Privacidade</a>
              <a href="#" className="hover:text-[#4FD1C5] transition">Termos de Serviço</a>
              <a href="#" className="hover:text-[#4FD1C5] transition">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
