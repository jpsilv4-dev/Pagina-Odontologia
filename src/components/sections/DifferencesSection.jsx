import { clinicaConfig } from '../../config/clinicaConfig'
import { Card } from '../common'

export function DifferencesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {clinicaConfig.differences.map((diff, index) => (
            <Card
              key={index}
              hover={true}
              className="text-center py-8"
            >
              <div className="text-5xl mb-4">{diff.icon}</div>
              <div className="text-3xl font-bold text-[#1A365D] mb-2">
                {diff.number}
              </div>
              <p className="text-[#2D3748] text-sm leading-relaxed">
                {diff.title}
              </p>
            </Card>
          ))}
        </div>

        {/* Card central com o "8 Especialistas" destacado */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-[#1A365D] to-[#2D3748] rounded-2xl p-8 text-center text-white relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-5 bg-pattern"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h3 className="text-3xl font-bold mb-3">8 Especialistas</h3>
              <p className="text-lg max-w-2xl mx-auto">
                Com títulos e certificações no mercado, prontos para transformar seu sorriso com excelência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
