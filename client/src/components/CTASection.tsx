import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Zap, MessageCircle } from 'lucide-react';
import { DemoModal } from './DemoModal';

export function CTASection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-destructive via-primary/50 to-destructive animate-gradient-shift"
        style={{ backgroundSize: '300% 300%' }}
      />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-white icon-neon" />
            <span className="text-sm font-medium text-white">Comece hoje mesmo</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Pronto para automatizar
            <br />
            seu negócio?
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Pare de perder tempo com tarefas repetitivas. Deixe a IA trabalhar por você enquanto você foca em crescer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-8 bg-white text-primary hover:bg-white/90"
              data-testid="button-agendar"
              onClick={() => setDemoModalOpen(true)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Demonstração
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8 bg-transparent text-white border-white/30 hover:bg-white/10 backdrop-blur-sm"
              data-testid="button-falar-especialista"
              asChild
            >
              <a href="https://wa.me/5511965372832" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 icon-neon" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 icon-neon" />
              <span>Consultoria gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 icon-neon" />
              <span>ROI garantido</span>
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
}
