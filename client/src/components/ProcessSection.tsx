import { Card } from '@/components/ui/card';
import { Search, Lightbulb, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Análise',
    description: 'Mapeamos seus processos e identificamos oportunidades de automação',
    details: ['Diagnóstico completo', 'ROI estimado', 'Priorização'],
    gradient: 'from-blue-600 to-blue-500',
    bgGradient: 'from-blue-500/10 to-transparent'
  },
  {
    icon: Lightbulb,
    title: 'Planejamento',
    description: 'Desenhamos a solução ideal com IA personalizada para sua operação',
    details: ['Arquitetura da solução', 'Integrações necessárias', 'Timeline definido'],
    gradient: 'from-cyan-600 to-cyan-500',
    bgGradient: 'from-cyan-500/10 to-transparent'
  },
  {
    icon: Rocket,
    title: 'Implementação',
    description: 'Desenvolvemos e integramos as automações em até 48 horas',
    details: ['Setup rápido', 'Testes rigorosos', 'Treinamento incluso'],
    gradient: 'from-primary to-accent',
    bgGradient: 'from-primary/10 to-transparent'
  },
  {
    icon: TrendingUp,
    title: 'Resultados',
    description: 'Acompanhamos métricas e otimizamos continuamente sua IA',
    details: ['Monitoramento 24/7', 'Otimização contínua', 'Suporte dedicado'],
    gradient: 'from-purple-600 to-pink-500',
    bgGradient: 'from-purple-500/10 to-transparent'
  }
];

export function ProcessSection() {
  return (
    <section id="como-funciona" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            PROCESSO SIMPLES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como a Daix transforma seu negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do diagnóstico à implementação, tudo pensado para você ter resultados rápidos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group relative p-8 hover-elevate active-elevate-2 transition-all duration-500 cursor-pointer overflow-hidden border-2"
              data-testid={`step-${index}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className={`text-6xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20`}>
                    {index + 1}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`} />
                      <span className="text-card-foreground/80">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
