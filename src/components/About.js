import { Card, CardContent } from './ui/card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl mb-6 tracking-tight">About Me</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Kaung, a passionate front-end developer based in Brisbane. As a QUT graduate with Meta Front-End Developer certification, 
                I'm dedicated to creating exceptional digital experiences using modern React technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in web development combines solid academic foundation with practical industry training. 
                I specialize in agile methodology and project & task management, ensuring efficient development workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new JavaScript frameworks, contributing to open-source projects, 
                and staying current with the latest developments in the React ecosystem.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-3xl mb-2">100+</h3>
                <p className="text-muted-foreground text-sm tracking-wide">Hours of Coding</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl mb-2">10+</h3>
                <p className="text-muted-foreground text-sm tracking-wide">Projects Built</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl mb-2">React</h3>
                <p className="text-muted-foreground text-sm tracking-wide">Main Focus</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl mb-2">Meta</h3>
                <p className="text-muted-foreground text-sm tracking-wide">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;