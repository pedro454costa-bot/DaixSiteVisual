import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, Zap, MessageSquare, Database, Bot, FileSpreadsheet, Mail, Calendar, Globe, ShoppingCart } from 'lucide-react';
import { DemoModal } from './DemoModal';
import { TechAnimation } from './TechAnimation';
import { ParallaxBackground } from './ParallaxBackground';
import { AutomationFlowEffect } from './AutomationFlowEffect';

const automationLogos = [
  { icon: MessageSquare, label: 'WhatsApp', color: 'text-green-400' },
  { icon: Database, label: 'CRM', color: 'text-purple-400' },
  { icon: Bot, label: 'Chatbots', color: 'text-primary' },
  { icon: FileSpreadsheet, label: 'Planilhas', color: 'text-emerald-400' },
  { icon: Mail, label: 'Email', color: 'text-orange-400' },
  { icon: Calendar, label: 'Agendas', color: 'text-pink-400' },
  { icon: Globe, label: 'Sites', color: 'text-cyan-400' },
  { icon: ShoppingCart, label: 'E-commerce', color: 'text-yellow-400' }
];

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
      {/* Simple gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"
      />
      
      {/* Automation flow visualization - Main effect */}
      <AutomationFlowEffect />
      
      {/* Subtle animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(0deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 30s linear infinite'
        }} />
      </div>

      {/* Minimal ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animation: 'glow-pulse 6s ease-in-out infinite' }} 
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
          style={{ animation: 'glow-pulse 8s ease-in-out infinite', animationDelay: '3s' }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 text-primary icon-neon" />
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
              Chega de <span className="line-through opacity-60">planilhas</span>, <span className="line-through opacity-60">atendimentos manuais</span> e <span className="line-through opacity-60">sistemas cheios de botões</span>.
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

          {/* Logos de Automação */}
          <div className="pt-12 space-y-4">
            <p className="text-sm text-muted-foreground">Automatize tudo que é repetitivo</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {automationLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                  data-testid={`logo-${index}`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-muted/50 backdrop-blur-sm flex items-center justify-center hover-elevate`}>
                    <logo.icon className={`w-6 h-6 ${logo.color}`} />
                  </div>
                  <span className="text-xs text-muted-foreground">{logo.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 icon-neon" style={{ color: 'hsl(var(--daix-success))' }} />
              <span>Sem instalação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 icon-neon" style={{ color: 'hsl(var(--daix-success))' }} />
              <span>Sem mensalidades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 icon-neon" style={{ color: 'hsl(var(--daix-success))' }} />
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
}
