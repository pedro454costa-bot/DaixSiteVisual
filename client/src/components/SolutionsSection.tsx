import { Card } from '@/components/ui/card';
import { MessageSquare, BarChart3, Settings, Check, Cpu } from 'lucide-react';

const solutions = [
  {
    icon: MessageSquare,
    title: 'IA Conversacional',
    description: 'Atendimento automatizado que entende contexto, resolve problemas e qualifica leads sem você mover um dedo.',
    features: [
      'WhatsApp, Instagram, Site',
      'Respostas humanizadas',
      'Integração com CRM'
    ]
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Transforme dados em decisões. IA que analisa padrões, prevê tendências e sugere ações estratégicas.',
    features: [
      'Dashboards em tempo real',
      'Previsões automáticas',
      'Relatórios inteligentes'
    ]
  },
  {
    icon: Settings,
    title: 'Automação de Processos',
    description: 'Elimine tarefas manuais. Workflows inteligentes que conectam seus sistemas e executam ações automaticamente.',
    features: [
      'Integração total',
      'Zero erro humano',
      'Economia de 80% do tempo'
    ]
  },
  {
    icon: Cpu,
    title: 'Sistemas Inteligentes',
    description: 'A DAIX cria sistemas inteligentes sob medida para sua empresa. Sem instalação, sem complicação — tudo na nuvem.',
    features: [
      '100% na nuvem',
      'Customização total',
      'Manutenção inclusa'
    ]
  }
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">SOLUÇÕES INTELIGENTES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Automatize tudo que é repetitivo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sistemas inteligentes que trabalham 24/7 enquanto você cresce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer border-2"
              data-testid={`card-solution-${index}`}
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-cyan">
                  <solution.icon className="w-7 h-7 text-white icon-neon" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent icon-neon shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
