import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Loader2, Bot } from 'lucide-react';
import { saveDemoRequest } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = 'greeting' | 'ask-name' | 'name-input' | 'ask-whatsapp' | 'whatsapp-input' | 'ask-needs' | 'needs-input' | 'final';

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [step, setStep] = useState<Step>('greeting');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [needs, setNeeds] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const messages: Record<Step, string> = {
    'greeting': 'Olá! Sou o assistente da DAIX.\nVou te ajudar a agendar uma demonstração personalizada.',
    'ask-name': 'Para começar, como posso te chamar?',
    'name-input': '',
    'ask-whatsapp': `Ótimo, ${name}!\nMe envia seu WhatsApp para continuarmos.`,
    'whatsapp-input': '',
    'ask-needs': 'Perfeito.\nAgora me conta rapidamente: como a DAIX pode te ajudar?\nExemplos: criar um sistema, solução com A.I, automatizar tarefas repetitivas…',
    'needs-input': '',
    'final': `Obrigado, ${name}!\nRecebemos suas informações e já estamos preparando o próximo passo.\nEm breve você receberá uma mensagem para combinarmos um bate-papo.\nEsse é o primeiro passo para levar sua empresa ao próximo nível.`
  };

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep('greeting');
        setName('');
        setWhatsapp('');
        setNeeds('');
        setDisplayedText('');
        setIsTyping(false);
      }, 300);
    }
  }, [open]);

  useEffect(() => {
    const currentMessage = messages[step];
    if (!currentMessage) return;

    setDisplayedText('');
    setIsTyping(true);

    let index = 0;
    const interval = setInterval(() => {
      if (index < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        
        if (step === 'greeting') {
          setTimeout(() => setStep('ask-name'), 1000);
        } else if (step === 'ask-name') {
          setTimeout(() => setStep('name-input'), 500);
        } else if (step === 'ask-whatsapp') {
          setTimeout(() => setStep('whatsapp-input'), 500);
        } else if (step === 'ask-needs') {
          setTimeout(() => setStep('needs-input'), 500);
        }
      }
    }, 25);

    return () => clearInterval(interval);
  }, [step]);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setStep('ask-whatsapp');
    }
  };

  const handleWhatsappSubmit = () => {
    if (whatsapp.trim()) {
      setStep('ask-needs');
    }
  };

  const handleNeedsSubmit = async () => {
    if (needs.trim()) {
      setIsSaving(true);
      try {
        const result = await saveDemoRequest({ name, whatsapp, needs });
        if (result) {
          console.log('Demo request persisted to Supabase');
        } else {
          console.log('Demo request processed (persistence unavailable)');
        }
        setStep('final');
      } catch (error) {
        console.error('Unexpected error in demo request flow:', error);
        setStep('final');
      } finally {
        setIsSaving(false);
      }
    }
  };

  const showInput = (inputStep: Step) => step === inputStep && !isTyping;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[85vh] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 border-blue-500/30 text-white p-8 relative overflow-y-auto">
        {/* Grid effect background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(0deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <DialogTitle className="sr-only">Agendar Demonstração</DialogTitle>
        <DialogDescription className="sr-only">
          Assistente da DAIX para agendamento de demonstração personalizada
        </DialogDescription>
        <div className="space-y-6 relative z-10">
          {/* Avatar do assistente */}
          <div className="flex items-start gap-3">
            <Avatar className="w-12 h-12 border-2 border-blue-400/50 flex-shrink-0">
              <AvatarFallback className="bg-blue-600 text-white">
                <Bot className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              {displayedText && (
                <div className="space-y-2 bg-blue-800/40 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                  {displayedText.split('\n').map((line, i) => (
                    <p key={i} className="text-lg leading-relaxed text-blue-50">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex items-center gap-2 text-blue-300 bg-blue-800/40 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">digitando...</span>
                </div>
              )}

              {showInput('name-input') && (
                <div className="space-y-3 animate-fade-in-up">
                  <Input
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
                    className="bg-blue-900/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400"
                    autoFocus
                    data-testid="demo-modal-name-input"
                  />
                  <Button
                    onClick={handleNameSubmit}
                    disabled={!name.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                    data-testid="demo-modal-name-submit"
                  >
                    Continuar
                  </Button>
                </div>
              )}

              {showInput('whatsapp-input') && (
                <div className="space-y-3 animate-fade-in-up">
                  <Input
                    placeholder="(11) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleWhatsappSubmit()}
                    className="bg-blue-900/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400"
                    autoFocus
                    data-testid="demo-modal-whatsapp-input"
                  />
                  <Button
                    onClick={handleWhatsappSubmit}
                    disabled={!whatsapp.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                    data-testid="demo-modal-whatsapp-submit"
                  >
                    Continuar
                  </Button>
                </div>
              )}

              {showInput('needs-input') && (
                <div className="space-y-3 animate-fade-in-up">
                  <Textarea
                    placeholder="Descreva como podemos ajudar..."
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                    className="bg-blue-900/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400 min-h-[100px]"
                    autoFocus
                    data-testid="demo-modal-needs-input"
                    disabled={isSaving}
                  />
                  <Button
                    onClick={handleNeedsSubmit}
                    disabled={!needs.trim() || isSaving}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                    data-testid="demo-modal-needs-submit"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Salvando...
                      </>
                    ) : (
                      'Enviar'
                    )}
                  </Button>
                </div>
              )}

              {step === 'final' && !isTyping && (
                <div className="pt-4 animate-fade-in-up">
                  <Button
                    onClick={() => onOpenChange(false)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                    data-testid="demo-modal-close"
                  >
                    Fechar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
