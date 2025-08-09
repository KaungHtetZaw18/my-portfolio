import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ navigate }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Card with Luxury Stripes */}
        <div className="relative bg-gray-900/80 rounded-2xl p-8 md:p-12 mb-16 overflow-hidden border border-gray-700/80 luxury-card backdrop-blur-sm">
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

          {/* Content */}
          <div className="relative z-10">
            {/* Profile Icon */}
            <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-full flex items-center justify-center">
              <div className="text-2xl font-bold text-slate-800">{'</>'}</div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight font-bold text-white">
              Kaung Htet Zaw
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-400 font-medium">
              Front-End Developer
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Innovative front-end developer with experience in delivering web-based solutions.<br />
              Known for strong collaboration and problem-solving skills, contributing to<br />
              successful project outcomes.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>kaunghtet.zaw.inbox@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Bangkok, Thailand</span>
              </div>
            </div>

            {/* Core Technologies */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700/50">React</span>
                <span className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700/50">JavaScript</span>
                <span className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700/50">Tailwind CSS</span>
                <span className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700/50">HTML5</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-3 bg-white text-black hover:bg-gray-100 font-semibold rounded-lg"
                onClick={() => navigate('/portfolio')}
              >
                View My Work →
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-gray-700 text-gray-300 hover:bg-gray-800/50 font-semibold rounded-lg"
                onClick={() => navigate('/contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>


        <div className="flex justify-center space-x-8">
          <a 
            href="https://github.com/KaungHtetZaw18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-3"
            aria-label="GitHub"
          >
            <Github className="size-6" />
          </a>
          <a 
            href="https://linkedin.com/in/kaung-htet-zaw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-3"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-6" />
          </a>
          <a 
            href="mailto:kaunghtetzaw.inbox@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-3"
            aria-label="Email"
          >
            <Mail className="size-6" />
          </a>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <ArrowDown className="size-6" />
      </button>
    </section>
  );
};

export default Hero;
