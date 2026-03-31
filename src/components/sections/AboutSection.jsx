import { clinicaConfig } from '../../config/clinicaConfig'
import { Check } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-[#f8feff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#4FD1C5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem com efeitos */}
          <div className="relative animate-slide-in-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4FD1C5] to-[#30a3c8] rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50">
              <img
                src="src/assets/dentista.jpg"
                alt="Profissional da Clínica"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/40 via-transparent to-transparent"></div>
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 border border-[#4FD1C5]/30">
                <p className="text-sm font-bold text-[#1A365D]">foto do especialista</p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#4FD1C5]/10 border border-[#4FD1C5]/30">
              <p className="text-sm font-semibold text-[#4FD1C5]">SOBRE NÓS</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-8 leading-tight">
              {clinicaConfig.aboutTitle}
            </h2>

            <p className="text-lg text-[#2D3748] mb-10 leading-relaxed font-light">
              {clinicaConfig.aboutDescription}
            </p>

            {/* Features com melhor estilo */}
            <div className="space-y-5">
              {clinicaConfig.aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#4FD1C5]/5 to-transparent hover:from-[#4FD1C5]/15 transition-all group"
                >
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-[#4FD1C5]/20 group-hover:bg-[#4FD1C5]/30 transition">
                    <Check size={20} className="text-[#4FD1C5]" />
                  </div>
                  <p className="text-base text-[#2D3748] font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
