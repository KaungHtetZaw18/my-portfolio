import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Technologies',
      skills: [
        'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'
      ]
    },
    {
      title: 'React Ecosystem',
      skills: [
        'React Hooks', 'React Router', 'Context API', 'JSX', 'Component Lifecycle'
      ]
    },
    {
      title: 'Styling & UI',
      skills: [
        'Tailwind CSS', 'CSS Grid', 'Flexbox', 'Material-UI', 'UI/UX Design'
      ]
    },
    {
      title: 'Tools & Methodology',
      skills: [
        'Git', 'VS Code', 'npm', 'Agile Methodology', 'Project Management'
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl mb-6 tracking-tight">Skills</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technologies and methodologies I use to build modern React applications with efficient project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl tracking-wide">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="text-sm py-2 px-4 bg-card border border-border/50 hover:border-border transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;