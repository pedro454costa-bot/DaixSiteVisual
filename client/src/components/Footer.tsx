import { DaixLogo } from './DaixLogo';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  solutions: [
    { label: 'Chatbots IA', href: '#' },
    { label: 'Análise de Dados', href: '#' },
    { label: 'Automação', href: '#' },
    { label: 'Integração', href: '#' }
  ],
  company: [
    { label: 'Sobre Nós', href: '#' },
    { label: 'Cases', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carreiras', href: '#' }
  ],
  contact: [
    { icon: Mail, label: 'contato@daix.com.br', href: 'mailto:contato@daix.com.br' },
    { icon: Phone, label: '+55 (11) 9999-9999', href: 'tel:+5511999999999' },
    { icon: MapPin, label: 'São Paulo, Brasil', href: '#' }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <DaixLogo />
            <p className="text-sm text-muted-foreground">
              Automatização inteligente para empresas que querem crescer sem limites.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                  aria-label={social.label}
                  data-testid={`link-social-${index}`}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground icon-neon" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Soluções</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-solution-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-company-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-contact-${index}`}
                  >
                    <link.icon className="w-4 h-4 icon-neon" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DAIX. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
