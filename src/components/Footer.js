import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/KaungHtetZaw18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a 
              href="https://linkedin.com/in/kaung-htet-zaw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a 
              href="mailto:kaunghtetzaw.inbox@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm tracking-wide">
              © {currentYear} Kaung Htet Zaw - Front-End Developer
            </p>
            <p className="text-muted-foreground text-xs tracking-wide">
              Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;