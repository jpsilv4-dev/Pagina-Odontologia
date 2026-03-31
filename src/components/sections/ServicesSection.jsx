import { clinicaConfig } from '../../config/clinicaConfig'
import { Card } from '../common'

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 px-4 bg-gradient-to-b from-white via-[#f8feff] to-[#F7FAFC] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FD1C5] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A365D] opacity-3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">
            Nossa Excelência em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] to-[#30a3c8]">Tratamentos</span>
          </h2>
          <p className="text-xl text-[#2D3748] max-w-2xl mx-auto font-light">
            Oferecemos os mais avançados procedimentos odontológicos com tecnologia de ponta e equipe especializada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clinicaConfig.servicos.map((servico, idx) => (
            <Card
              key={servico.id}
              hover={true}
              className="flex flex-col items-center text-center group backdrop-blur-sm border border-white/50 animate-slide-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-7xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">{servico.icon}</div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3 group-hover:text-[#4FD1C5] transition-colors">
                {servico.titulo}
              </h3>
              <p className="text-sm text-[#2D3748] leading-relaxed font-light">
                {servico.descricao}
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-transparent via-[#4FD1C5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
