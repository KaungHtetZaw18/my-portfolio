import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Folder, Filter } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Survey Platform - Leadership Training',
      description: 'A comprehensive web-based survey platform for leadership assessment and training. Built as a capstone project with AWS deployment, featuring responsive design and user management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AWS', 'Responsive Design'],
      category: 'Web App',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: true
    },
    {
      title: 'React Portfolio Website',
      description: 'Personal portfolio showcasing frontend development skills. Built with React and modern CSS frameworks, featuring responsive design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      category: 'Portfolio',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: true
    },
    {
      title: 'Responsive Landing Page',
      description: 'Modern landing page with focus on responsive design and cross-browser compatibility. Features smooth scrolling and optimized performance.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Landing Page',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: false
    },
    {
      title: 'Interactive Form Components',
      description: 'Collection of reusable form components with validation and accessibility features. Built with modern JavaScript and CSS.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Form Validation'],
      category: 'Components',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: false
    },
    {
      title: 'CSS Grid Layout System',
      description: 'Flexible CSS Grid-based layout system for responsive web designs. Includes utility classes and documentation.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop',
      technologies: ['CSS Grid', 'CSS3', 'Responsive Design', 'SCSS'],
      category: 'Framework',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: false
    },
    {
      title: 'React Component Library',
      description: 'Reusable React component library with consistent styling and documentation. Features button, card, and form components.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop',
      technologies: ['React', 'JavaScript', 'CSS Modules', 'Storybook'],
      category: 'Library',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'Portfolio', 'Landing Page', 'Components', 'Framework', 'Library'];

  return (
    <div className="min-h-screen pt-24 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <Card className="p-10 mb-8 bg-neutral-800 border-border/50">
          <div className="text-center space-y-6">
            <div>
              <h1 className="text-4xl mb-4 tracking-tight">Portfolio</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                A collection of React applications showcasing my growing skills and learning journey in frontend development.
              </p>
            </div>
            
            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={index === 0 ? "default" : "outline"} 
                  size="sm" 
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Featured Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Folder className="size-5 text-primary" />
            </div>
            <h2 className="text-2xl tracking-tight">Featured Projects</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="overflow-hidden bg-neutral-800 border-neutral-700 group hover:border-neutral-600 transition-colors duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl tracking-wide">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-3 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Filter className="size-5 text-primary" />
            </div>
            <h2 className="text-2xl tracking-tight">All Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-neutral-800 border-neutral-700 group hover:border-neutral-600 transition-colors duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg tracking-wide">{project.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-border/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-border/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-1">
                    <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
