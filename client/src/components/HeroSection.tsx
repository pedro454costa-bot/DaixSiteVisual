import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { DemoModal } from './DemoModal';
import { TechAnimation } from './TechAnimation';

export function HeroSection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-gradient-shift"
        style={{ backgroundSize: '300% 300%' }}
      />
      
      <TechAnimation />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px),
            linear-gradient(0deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/20" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Inteligência Artificial para o seu negócio</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            I.A{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
              não tira pausa
            </span>
            <br />
            <span className="text-foreground">pro café.</span>
          </h1>

          <div className="text-lg md:text-xl max-w-2xl mx-auto space-y-3">
            <p className="text-foreground font-medium animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Ela tá ocupada <span className="text-primary font-semibold">entregando resultados</span>.
            </p>
            <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Chega de <span className="line-through opacity-60">planilhas</span>, <span className="line-through opacity-60">atendimentos manuais</span> e <span className="line-through opacity-60">sistemas cheios de botão</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="text-base px-8" 
              data-testid="button-automatizar"
              onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Automatizar Agora
              <span className="ml-2">→</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 backdrop-blur-sm" 
              data-testid="button-demonstracao"
              onClick={() => setDemoModalOpen(true)}
            >
              Ver Demonstração
              <span className="ml-2">▶</span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Sem instalação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Sem mensalidades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
}
