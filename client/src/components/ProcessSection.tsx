const steps = [
  {
    number: 1,
    title: 'Análise',
    description: 'Mapeamos seus processos e identificamos oportunidades de automação',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: 2,
    title: 'Planejamento',
    description: 'Desenhamos a solução ideal com IA personalizada para sua operação',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    number: 3,
    title: 'Implementação',
    description: 'Desenvolvemos e integramos as automações em até 48 horas',
    color: 'from-cyan-500 to-purple-500'
  },
  {
    number: 4,
    title: 'Resultados',
    description: 'Acompanhamos métricas e otimizamos continuamente sua IA',
    color: 'from-purple-500 to-pink-500'
  }
];

export function ProcessSection() {
  return (
    <section id="como-funciona" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
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

        <div className="relative">
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                data-testid={`step-${index}`}
              >
                <div className="flex justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10`}>
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
