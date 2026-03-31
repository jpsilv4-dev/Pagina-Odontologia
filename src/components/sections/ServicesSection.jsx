import { clinicaConfig } from '../../config/clinicaConfig'
import { Card } from '../common'

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-4 bg-gradient-to-b from-white to-[#F7FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
            Nossa Excelência em Tratamentos
          </h2>
          <p className="text-xl text-[#2D3748] max-w-2xl mx-auto">
            Oferecemos os mais avançados procedimentos odontológicos com tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicaConfig.servicos.map((servico) => (
            <Card
              key={servico.id}
              hover={true}
              className="flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{servico.icon}</div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                {servico.titulo}
              </h3>
              <p className="text-sm text-[#2D3748] leading-relaxed">
                {servico.descricao}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
