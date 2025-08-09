import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code, Zap } from 'lucide-react';

const HomePage = ({ navigate }) => {
  const quickSkills = ['React', 'JavaScript', 'Tailwind CSS', 'HTML5'];
  
  return (
    <div className="min-h-screen pt-24 py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Card */}
        <Card className="p-12 mb-8 bg-neutral-800 border-neutral-700 relative overflow-hidden">
          {/* Luxury Diagonal Stripes Pattern */}
          <div className="absolute inset-0 luxury-stripes"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 8px,
                  rgba(255, 255, 255, 0.08) 8px,
                  rgba(255, 255, 255, 0.08) 16px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 12px,
                  rgba(255, 255, 255, 0.04) 12px,
                  rgba(255, 255, 255, 0.04) 24px
                )
              `
            }}></div>
          </div>
          <div className="text-center space-y-8 relative z-10">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="w-24 h-24 rounded-full bg-muted mx-auto flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-background flex items-center justify-center">
                  <Code className="size-8" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl mb-4 tracking-tight">Kaung Htet Zaw</h1>
                <p className="text-xl text-muted-foreground mb-4">Front-End Developer</p>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Innovative front-end developer with experience in delivering web-based solutions. 
                  Known for strong collaboration and problem-solving skills, contributing to successful project outcomes.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>kaunghtetzaw.inbox@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>Brisbane, Australia</span>
              </div>
            </div>

            {/* Quick Skills */}
            <div className="space-y-4">
              <h3 className="text-lg">Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {quickSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-2 px-4 bg-muted border border-border/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="px-8 py-3" onClick={() => navigate('/portfolio')}>
                View My Work
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3" onClick={() => navigate('/contact')}>
                Get In Touch
              </Button>
            </div>
          </div>
        </Card>

        {/* About Me Card */}
        <Card className="p-10 mb-8 bg-neutral-800 border-neutral-700">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl mb-4 tracking-tight">About Me</h2>
              <div className="w-12 h-px bg-primary mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate front-end developer and recent QUT graduate with Meta Front-End Developer certification, 
                  dedicated to creating exceptional digital experiences. Currently based in Brisbane, Australia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey includes developing and deploying survey platforms, resolving backend issues, 
                  and creating frontend features using modern technologies like HTML, CSS, JavaScript, and React.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I excel in agile methodologies and project & task management, 
                  utilizing tools like Trello for organization and GitHub for version control and collaboration.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-neutral-700/60 rounded-lg">
                  <h3 className="text-2xl mb-1">2024</h3>
                  <p className="text-muted-foreground text-sm">Graduate</p>
                </div>
                <div className="text-center p-4 bg-neutral-700/60 rounded-lg">
                  <h3 className="text-2xl mb-1">QUT</h3>
                  <p className="text-muted-foreground text-sm">Bachelor's IT</p>
                </div>
                <div className="text-center p-4 bg-neutral-700/60 rounded-lg">
                  <h3 className="text-2xl mb-1">React</h3>
                  <p className="text-muted-foreground text-sm">Specialist</p>
                </div>
                <div className="text-center p-4 bg-neutral-700/60 rounded-lg">
                  <h3 className="text-2xl mb-1">Meta</h3>
                  <p className="text-muted-foreground text-sm">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* What I'm Doing Card */}
        <Card className="p-10 bg-neutral-800 border-neutral-700">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl mb-4 tracking-tight">What I'm Doing</h2>
              <div className="w-12 h-px bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 p-6 bg-neutral-700/40 rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="size-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg">Frontend Development</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building responsive web applications using React, JavaScript, HTML5, CSS3, and Tailwind CSS with focus on user experience.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-neutral-700/40 rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="size-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg">Project Management</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implementing agile methodology with tools like Trello, GitHub for version control, and Slack for team communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
