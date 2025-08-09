import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce React App',
      description: 'A full-featured e-commerce application built with React, featuring product catalog, shopping cart, and responsive design with modern UI components.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
      liveUrl: 'https://github.com/KaungHtetZaw18',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: true
    },
    {
      title: 'Task Management Dashboard',
      description: 'Project management application with task tracking, progress monitoring, and team collaboration features using React and agile methodology principles.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      technologies: ['React', 'Project Management', 'Agile', 'Responsive Design'],
      liveUrl: 'https://github.com/KaungHtetZaw18',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application displaying real-time weather information with responsive design and modern component architecture.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop',
      technologies: ['React', 'API Integration', 'CSS Grid', 'State Management'],
      liveUrl: 'https://github.com/KaungHtetZaw18',
      githubUrl: 'https://github.com/KaungHtetZaw18',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl mb-6 tracking-tight">Projects</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of React applications showcasing my skills in front-end development and project management.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl tracking-wide">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-border/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl mb-12 text-center tracking-wide">More Projects</h3>
            <div className="grid md:grid-cols-1 max-w-2xl mx-auto">
              {otherProjects.map((project, index) => (
                <div key={index} className="border border-border/30 rounded-lg p-8 space-y-4">
                  <h4 className="text-lg tracking-wide">{project.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-3 mr-1" />
                        Demo
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
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;