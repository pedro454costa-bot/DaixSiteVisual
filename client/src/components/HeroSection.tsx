import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-gradient-shift"
        style={{ backgroundSize: '300% 300%' }}
      />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Inteligência Artificial para o seu negócio</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            I.A{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
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
            <Button size="lg" className="text-base px-8" data-testid="button-automatizar">
              Automatizar Agora
              <span className="ml-2">→</span>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 backdrop-blur-sm" data-testid="button-demonstracao">
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
    </section>
  );
}
