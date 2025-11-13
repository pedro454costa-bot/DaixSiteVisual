import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap, DollarSign, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

const benefits = [
  {
    icon: Zap,
    title: 'Rápido de Implementar',
    description: 'Suas primeiras automações rodando em até 48 horas. Sem burocracia, sem complicação.'
  },
  {
    icon: DollarSign,
    title: 'ROI Comprovado',
    description: 'Economia média de 70% em custos operacionais. Aumento de 3x na produtividade da equipe.'
  },
  {
    icon: Shield,
    title: 'Seguro e Confiável',
    description: 'Infraestrutura enterprise, dados criptografados e conformidade com LGPD garantida.'
  }
];

const metrics = [
  { value: 98, label: 'Precisão da IA', suffix: '%' },
  { value: 24, label: 'Disponibilidade', suffix: '/7' },
  { value: 80, label: 'Redução de Tempo', suffix: '%', prefix: '-' },
  { value: 3, label: 'Mais Produtividade', suffix: 'x' }
];

export function BenefitsSection() {
  const [tasksAutomated, setTasksAutomated] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          let current = 0;
          const target = 1247;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setTasksAutomated(target);
              clearInterval(timer);
            } else {
              setTasksAutomated(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('benefits-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="beneficios" className="py-24" data-testid="section-beneficios">
      <div id="benefits-section" className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                POR QUE ESCOLHER A DAIX
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Tecnologia que trabalha
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  por você
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Enquanto seus concorrentes perdem tempo com tarefas manuais, você escala com inteligência artificial.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4" data-testid={`benefit-${index}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center space-y-2 hover-elevate transition-all"
                  data-testid={`metric-${index}`}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Tarefas Automatizadas Hoje
                  </span>
                  <span className="text-3xl font-bold text-primary" data-testid="text-tasks-count">
                    {tasksAutomated.toLocaleString('pt-BR')}
                  </span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  +47% comparado ao mês passado
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
