import { clinicaConfig } from '../../config/clinicaConfig'
import { Card } from '../common'

export function DifferencesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#F7FAFC] via-white to-[#f8feff] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1A365D] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4FD1C5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {clinicaConfig.differences.map((diff, index) => (
            <Card
              key={index}
              hover={true}
              className="text-center py-12 border border-[#4FD1C5]/20 group relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-300">{diff.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1A365D] to-[#4FD1C5] bg-clip-text text-transparent mb-3">
                  {diff.number}
                </div>
                <p className="text-[#2D3748] text-sm leading-relaxed font-medium">
                  {diff.title}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Card central destacado */}
        <div className="mt-16 animate-slide-in-up">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4FD1C5] via-[#30a3c8] to-[#1A365D] rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-[#1A365D] via-[#0f1f3a] to-[#2D3748] rounded-3xl p-12 text-center text-white overflow-hidden border border-white/10">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#4FD1C5] rounded-full blur-3xl animate-pulse-slow"></div>
              </div>

              <div className="relative z-10">
                <div className="text-7xl mb-6">👨‍⚕️</div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4FD1C5] to-white bg-clip-text text-transparent">8 Especialistas</h3>
                <p className="text-lg max-w-2xl mx-auto font-light leading-relaxed">
                  Com títulos e certificações no mercado, prontos para transformar seu sorriso com <span className="font-semibold text-[#4FD1C5]">excelência</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
