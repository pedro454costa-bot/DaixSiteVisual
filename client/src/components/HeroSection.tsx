import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { DemoModal } from './DemoModal';
import { TechAnimation } from './TechAnimation';
import { ParallaxBackground } from './ParallaxBackground';

export function HeroSection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic gradient background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-gradient-shift"
        style={{ 
          backgroundSize: '300% 300%',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Animated tech particles */}
      <TechAnimation />
      
      {/* Parallax elements */}
      <ParallaxBackground />
      
      {/* Animated grid with parallax */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px),
            linear-gradient(0deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Glowing orbs with enhanced effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          style={{ 
            animation: 'glow-pulse 4s ease-in-out infinite',
            transform: `translateY(${scrollY * 0.2}px)`
          }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/25 rounded-full blur-3xl"
          style={{ 
            animation: 'glow-pulse 6s ease-in-out infinite',
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.15}px)`
          }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/15 rounded-full blur-2xl"
          style={{ 
            animation: 'glow-pulse 5s ease-in-out infinite',
            animationDelay: '1s',
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.25}px)`
          }} 
        />
      </div>

      {/* Scanline effect */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)',
          animation: 'scanline 8s linear infinite'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Inteligência Artificial para o seu negócio</span>
            <Zap className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight relative">
            <span className="relative inline-block">
              I.A{' '}
              <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-lg animate-pulse" style={{ zIndex: -1 }} />
            </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift relative inline-block" style={{ backgroundSize: '200% 200%' }}>
              não tira pausa
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-2xl animate-pulse" style={{ zIndex: -1, animationDuration: '3s' }} />
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
              className="text-base px-8 relative overflow-hidden group shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300" 
              data-testid="button-automatizar"
              onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Automatizar Agora</span>
              <span className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-lg" 
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
