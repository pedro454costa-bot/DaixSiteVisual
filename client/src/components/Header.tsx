import { DaixLogo } from './DaixLogo';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <DaixLogo />
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solucoes" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-solucoes">
            Soluções
          </a>
          <a href="#beneficios" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-beneficios">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-como-funciona">
            Como Funciona
          </a>
          <a href="#contato" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-contato">
            Contato
          </a>
        </nav>

        <Button data-testid="button-comecar" className="hidden md:inline-flex">
          Começar Agora
        </Button>
      </div>
    </header>
  );
}
