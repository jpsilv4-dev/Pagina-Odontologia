import { clinicaConfig } from '../../config/clinicaConfig'
import { Check } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="src/assets/dentista.jpg" // Substitua pelo caminho da imagem real
                alt="Profissional da Clínica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/30 to-transparent"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6 leading-tight">
              {clinicaConfig.aboutTitle}
            </h2>

            <p className="text-lg text-[#2D3748] mb-8 leading-relaxed">
              {clinicaConfig.aboutDescription}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {clinicaConfig.aboutFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={24} className="text-[#4FD1C5]" />
                  </div>
                  <p className="text-base text-[#2D3748]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
