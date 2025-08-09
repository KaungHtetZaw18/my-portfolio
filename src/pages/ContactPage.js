import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Github, Linkedin, MapPin, MessageCircle, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kaunghtetzaw.inbox@gmail.com',
      description: 'Best way to reach me for project inquiries',
      href: 'mailto:kaunghtetzaw.inbox@gmail.com',
      primary: true,
      copyable: true
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@KaungHtetZaw18',
      description: 'Check out my code and projects',
      href: 'https://github.com/KaungHtetZaw18',
      primary: false,
      copyable: false
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/kaung-h-zaw/',
      description: 'Let\'s connect professionally',
      href: 'https://linkedin.com/in/kaung-h-zaw/',
      primary: false,
      copyable: false
    }
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kaunghtetzaw.inbox@gmail.com');
      toast.success('Email copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy email');
    }
  };

  return (
    <div className="min-h-screen pt-24 py-8 md:py-12 px-3 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Card */}
        <Card className="p-3 sm:p-4 md:p-6 lg:p-10 mb-4 md:mb-6 lg:mb-8 bg-neutral-800 border-neutral-700">
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 tracking-tight">Let's Connect</h1>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting React projects, 
                or just chat about web development.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Contact Information */}
          <div className="space-y-3 sm:space-y-4 md:space-y-3 sm:space-y-4 md:space-y-6">
            {/* Contact Methods */}
            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-neutral-800 border-neutral-700 w-full">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle className="size-5 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl tracking-tight">Get In Touch</h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex gap-2 md:gap-3 lg:gap-4 p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-lg bg-neutral-700/40 hover:bg-neutral-700/60 transition-colors duration-300 group"
                    >
                      <div className={`p-3 rounded-lg ${method.primary ? 'bg-primary/10' : 'bg-muted/50'} group-hover:scale-105 transition-transform duration-300`}>
                        <method.icon className={`size-5 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{method.title}</h3>
                          {method.primary && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">Primary</span>
                          )}
                        </div>
                        <p className="text-sm">{method.value}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                      <div className="flex gap-2">
                        {method.copyable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleCopyEmail}
                            className="h-8 w-8 p-0"
                          >
                            <Copy className="size-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self')}
                          className="h-8 w-8 p-0"
                        >
                          <ExternalLink className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Location & Availability */}
            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-neutral-800 border-neutral-700 w-full">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <h2 className="text-lg md:text-xl lg:text-2xl tracking-tight">Location & Availability</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="size-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Brisbane, Australia</p>
                      <p className="text-sm text-muted-foreground">Open to remote opportunities worldwide</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium">Availability</p>
                    <p className="text-sm text-muted-foreground">
                      Currently seeking front-end developer positions and open to freelance React projects
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Contact Card */}
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 bg-neutral-800 border-neutral-700 w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="size-5 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl tracking-tight">Quick Contact</h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-neutral-700/40 rounded-lg text-center">
                  <Mail className="size-10 md:size-12 text-primary mx-auto mb-4" />
                  <h3 className="text-base md:text-lg mb-2">Email Me Directly</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4">
                    Ready to discuss your project? Send me an email and I'll get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                    <Button 
                      onClick={handleCopyEmail}
                      variant="outline"
                      className="flex items-center gap-2 text-sm md:text-base"
                    >
                      <Copy className="size-4" />
                      Copy Email
                    </Button>
                    <Button 
                      onClick={() => window.open('mailto:kaunghtetzaw.inbox@gmail.com', '_self')}
                      className="flex items-center gap-2 text-sm md:text-base"
                    >
                      <Mail className="size-4" />
                      Open Email App
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="font-medium text-sm md:text-base">What I can help you with:</h3>
                  <div className="grid gap-2 md:gap-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 p-1 sm:p-1.5 md:p-2 lg:p-3 bg-neutral-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs md:text-sm">React application development</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 p-1 sm:p-1.5 md:p-2 lg:p-3 bg-neutral-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs md:text-sm">Frontend consulting and code reviews</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 p-1 sm:p-1.5 md:p-2 lg:p-3 bg-neutral-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs md:text-sm">Website redesigns and optimization</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 p-1 sm:p-1.5 md:p-2 lg:p-3 bg-neutral-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs md:text-sm">Full-time or freelance opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action Card */}
        <Card className="p-3 sm:p-4 md:p-6 lg:p-10 mt-4 md:mt-6 lg:mt-8 bg-neutral-700/40 border-neutral-700">
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl mb-4 tracking-tight">Ready to Work Together?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's build something amazing together!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3" onClick={() => window.open('mailto:kaunghtetzaw.inbox@gmail.com', '_self')}>
                <Mail className="size-4 mr-2" />
                Email Me
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3" onClick={() => window.history.pushState({}, '', '/portfolio')}>
                View My Work
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
