import { clinicaConfig } from '../../config/clinicaConfig'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Mail as MailIcon } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { endereco } = clinicaConfig

  return (
    <footer className="bg-gradient-to-b from-[#1A365D] via-[#0f1f3a] to-[#1A365D] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4FD1C5] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4FD1C5] opacity-3 rounded-full blur-3xl"></div>

      {/* Google Maps + Informações */}
      <div className="px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Mapa com efeito */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 border border-white/10 group">
              <iframe
                src={clinicaConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
                className="group-hover:scale-105 transition-transform duration-500"
              ></iframe>
            </div>

            {/* Informações de Contato com mais estilo */}
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold mb-10 bg-gradient-to-r from-[#4FD1C5] to-white bg-clip-text text-transparent">
                {clinicaConfig.nome}
              </h3>

              <div className="space-y-7">
                {/* Endereço */}
                <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-white/5 transition">
                  <MapPin size={24} className="text-[#4FD1C5] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold mb-2 text-[#4FD1C5]">Localização</p>
                    <p className="text-gray-300">
                      {endereco.rua}, {endereco.bairro}
                    </p>
                    <p className="text-gray-300">
                      {endereco.cidade} - {endereco.estado} | {endereco.cep}
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-white/5 transition">
                  <Phone size={24} className="text-[#4FD1C5] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold mb-2 text-[#4FD1C5]">Telefone</p>
                    <a
                      href={`tel:${clinicaConfig.telefone}`}
                      className="text-gray-300 hover:text-[#4FD1C5] transition font-semibold"
                    >
                      {clinicaConfig.telefone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-white/5 transition">
                  <Mail size={24} className="text-[#4FD1C5] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold mb-2 text-[#4FD1C5]">E-mail</p>
                    <a
                      href={`mailto:${clinicaConfig.email}`}
                      className="text-gray-300 hover:text-[#4FD1C5] transition"
                    >
                      {clinicaConfig.email}
                    </a>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="pt-8 border-t border-white/20">
                  <p className="font-bold mb-6 text-lg text-[#4FD1C5]">Siga-nos nas Redes</p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4FD1C5] to-[#30a3c8] text-white flex items-center justify-center hover:scale-125 hover:shadow-2xl hover:shadow-[#4FD1C5]/50 transition-all duration-300 hover:-translate-y-1"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <Instagram size={22} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <Facebook size={22} />
                    </a>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center hover:scale-125 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:-translate-y-1"
                      aria-label="TikTok"
                      title="TikTok"
                    >
                      <FaTiktok size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <Linkedin size={22} />
                    </a>
                    <a
                      href={`https://wa.me/55${clinicaConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center hover:scale-125 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-1"
                      aria-label="WhatsApp"
                      title="WhatsApp"
                    >
                      <FaWhatsapp size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400 text-sm">
            <p className="font-semibold">© {currentYear} {clinicaConfig.nome}. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-6 mt-5 text-xs">
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
