import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { GraduationCap, Briefcase, Download, Code, Book, Award } from 'lucide-react';

const ResumePage = () => {
  const education = [
    {
      degree: 'Bachelor\'s Degree, Information Technology (Computer Science)',
      school: 'Queensland University of Technology (QUT)',
      period: '07/2023 - 12/2024',
      location: 'Brisbane, QLD, Australia',
      description: 'Focused on front-end web development, software engineering principles, and modern web technologies. Developed strong foundation in computer science fundamentals.',
      courses: ['Web Development', 'Software Engineering', 'Database Systems', 'Algorithms & Data Structures']
    },
    {
      degree: 'Higher National Diploma, Computing',
      school: 'GUSTO College',
      period: '11/2019 - 02/2023',
      location: 'Yangon, Myanmar (Burma)',
      description: 'Comprehensive computing program covering programming fundamentals, system analysis, and web technologies.',
      courses: ['Programming Fundamentals', 'System Analysis', 'Web Technologies', 'Database Management']
    }
  ];

  const experience = [
    {
      position: 'Capstone Project - Survey Platform',
      company: 'Associated By Queensland University of Technology (QUT) / The Guinea Group, Brisbane',
      period: '02/2024 - 06/2024',
      location: 'Brisbane',
      description: 'Developed and deployed a web-based survey platform for \'Leadership Under Pressure\' training on AWS. Resolved backend issues and created frontend features using HTML, CSS, and JavaScript.',
      achievements: [
        'Collaborated in a team of four to ensure timely delivery and alignment with project requirements',
        'Implemented Agile methodology with weekly sprints, utilizing Trello for task management, GitHub for version control, and Slack for communication'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AWS', 'Agile', 'Trello', 'GitHub', 'Slack']
    }
  ];

  const skills = {
    'Frontend Development': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React (Component-Based UI)', 'Tailwind CSS & Utility-First Styling'],
    'Web Technologies': ['Responsive Web Design', 'Cross-Browser Compatibility', 'Version Control (Git, GitHub)'],
    'Development Tools': ['Debugging & Troubleshooting', 'Project & Task Management (Trello, Slack)', 'AWS Basics', 'Vercel'],
    'Methodologies': ['Agile & Scrum Methodology', 'Deployment (AWS Basics, Vercel)']
  };

  const certifications = [
    {
      name: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera (offered by Meta)',
      completedDate: 'Oct 2023',
      credentialId: 'NQPRLMXDWBTB'
    },
    {
      name: 'QC37 English for Academic Purposes (EAP 2 Extended)',
      issuer: 'QUT College, Queensland University of Technology',
      completedDate: 'June 2023',
      location: 'Brisbane, Australia'
    }
  ];

  return (
    <div className="min-h-screen pt-24 py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <Card className="p-10 mb-8 bg-neutral-800 border-border/50">
          <div className="text-center space-y-6">
            <div>
              <h1 className="text-4xl mb-4 tracking-tight">Resume</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Educational background, professional experience, and technical expertise as a Front-End Developer specializing in React and modern web technologies.
              </p>
            </div>
            <Button size="lg" className="px-8 py-3">
              <Download className="size-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="p-8 bg-neutral-800 border-neutral-700">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <h2 className="text-2xl tracking-tight">Education</h2>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg leading-tight">{edu.degree}</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">{edu.school}</span>
                          <Badge variant="outline" className="text-xs">{edu.period}</Badge>
                        </div>
                        <p className="text-muted-foreground text-xs">{edu.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                    {index < education.length - 1 && <div className="w-full h-px bg-border mt-6"></div>}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-8 bg-neutral-800 border-neutral-700">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="size-6 text-primary" />
                </div>
                <h2 className="text-2xl tracking-tight">Experience</h2>
              </div>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg leading-tight">{exp.position}</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">{exp.company}</span>
                          <Badge variant="outline" className="text-xs">{exp.period}</Badge>
                        </div>
                        <p className="text-muted-foreground text-xs">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Key Achievements:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="list-disc leading-relaxed">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Card */}
        <Card className="p-10 mt-8 bg-neutral-800 border-neutral-700">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl mb-4 tracking-tight">Technical Skills</h2>
              <div className="w-12 h-px bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg tracking-wide">{category}</h3>
                  <div className="space-y-2">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3 p-3 bg-neutral-700/40 rounded-lg">
                        <Code className="size-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Certifications Card */}
        <Card className="p-10 mt-8 bg-neutral-800 border-neutral-700">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl mb-4 tracking-tight">Certifications</h2>
              <div className="w-12 h-px bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex gap-4 p-6 bg-neutral-700/40 rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="size-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg">{cert.name}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{cert.issuer}</p>
                      <p>Completed: {cert.completedDate}</p>
                      {cert.credentialId && <p>Credential ID: {cert.credentialId}</p>}
                      {cert.location && <p>{cert.location}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Languages Card */}
        <Card className="p-10 mt-8 bg-neutral-800 border-neutral-700">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl mb-4 tracking-tight">Languages</h2>
              <div className="w-12 h-px bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-neutral-700/40 rounded-lg">
                <h3 className="text-lg mb-2">Burmese</h3>
                <p className="text-muted-foreground">Native</p>
              </div>
              <div className="text-center p-6 bg-neutral-700/40 rounded-lg">
                <h3 className="text-lg mb-2">English</h3>
                <p className="text-muted-foreground">Advanced (C1)</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResumePage;
