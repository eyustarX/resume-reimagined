import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Code2, GraduationCap, Briefcase, User, Send, Award, Terminal } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const personalData = {
  name: "Eyob Tamiru Sime",
  title: "Software Engineer",
  email: "eyobtamiru111@gmail.com",
  phone: "+251986657979",
  location: "Addis Ababa, Ethiopia",
  linkedIn: "Eyob Tamiru",
  github: "eyustarX",
  bio: "Passionate Software Engineering student at Addis Ababa Science and Technology University with a focus on building impactful web applications and solving complex algorithmic challenges. Currently honing problem-solving skills through A2SV and maintaining a high academic standing with a CGPA of 3.91/4."
};

const education = [
  {
    institution: "Addis Ababa Science and Technology University",
    degree: "Bachelor of Science in Software engineering",
    dates: "10/2024 - 07/2029",
    location: "Addis Ababa, Ethiopia",
    details: [
      "CGPA - 3.91/4",
      "Relevant Course Work: Fundamentals of Programming 1, Introduction of Software Engineering and Computing, Discrete Mathematics, Probability and Statics"
    ]
  },
  {
    institution: "Africa To Silicon Valley (A2SV)",
    type: "A2SV Community Education",
    dates: "04/2025 - 09/2025",
    location: "Online",
    details: [
      "Successfully completed a training program with weekly lectures and contests.",
      "Focused on fundamental Data Structures and Algorithms concepts through lectures and problem-solving practice.",
      "Solved 200+ problems on Codeforces & LeetCode, steadily improving problem-solving speed and accuracy."
    ]
  }
];

const projects = [
  {
    name: "Quizcamp",
    type: "Personal Project",
    dates: "02/2024 – 03/2024",
    technologies: ["HTML", "CSS", "JavaScript"],
    details: [
      "Developed a responsive web application that lets users take interactive quizzes in ICT and Physics.",
      "Implemented real-time timers, score tracking, and subject-based question sets.",
      "Designed a clean, mobile-friendly UI using modern HTML5, CSS3, and JavaScript.",
      "Deployed via GitHub Pages for public access."
    ],
    github: "#"
  },
  {
    name: "GPA Calculator",
    type: "Personal Project",
    dates: "01/2024 – 02/2024",
    technologies: ["HTML", "CSS", "JavaScript"],
    details: [
      "Interactive web app that calculates students' GPA on a 4.0 scale.",
      "Dynamic addition of courses with credit hours and letter grades.",
      "Features real-time calculations and input validation with a user-friendly interface."
    ],
    github: "#"
  }
];

const skills = {
  languages: ["Python", "C++", "HTML/CSS", "JavaScript"],
  developerTools: ["GitHub", "VS Code"]
};

const certifications = [
  {
    name: "Data Structures & Algorithms Bootcamp",
    institution: "SkillBridge Institute Of Technology",
    date: "2025"
  },
  {
    name: "Scientific Computing with Python",
    institution: "FreeCodeCamp",
    date: "2025"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { name: 'Education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
        >
          ET.
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-blue-400 flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ 
          backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/6e1d83cc-3a9f-4c0a-9830-c7bf5b3087ae/hero-bg-cb50dd06-1773305064191.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-1" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-400 font-mono text-sm tracking-widest mb-4 uppercase">Software Engineer</h2>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">
            {personalData.name.split(' ').slice(0, 2).join(' ')} <span className="text-blue-500">Sime</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Crafting digital experiences with precision and speed. Based in {personalData.location}.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              View My Work
              <Briefcase className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="border border-white/20 hover:border-blue-500/50 hover:bg-blue-500/5 text-white px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a href={`https://github.com/${personalData.github}`} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/eyob-tamiru" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${personalData.email}`} className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-blue-500 font-mono">01.</span> About Me
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>{personalData.bio}</p>
              <p>
                My journey in tech began with a curiosity about how things work behind the screen. 
                Today, I focus on building robust applications using modern frameworks and constantly 
                challenging myself through competitive programming.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">3.91</div>
                  <div className="text-sm text-gray-500">CGPA</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">200+</div>
                  <div className="text-sm text-gray-500">DSA Problems</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <Terminal className="w-48 h-48 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />
              <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono">02.</span> Education & Experience
        </h2>
        <div className="max-w-4xl space-y-12">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l-2 border-blue-500/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-black" />
              <div className="mb-1 text-blue-400 font-mono text-sm">{edu.dates}</div>
              <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
              <div className="text-gray-300 font-medium mb-4">{edu.degree || edu.type}</div>
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="text-blue-500" /> Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all">
                <div className="text-blue-400 text-sm font-mono mb-1">{cert.date}</div>
                <h4 className="text-white font-bold">{cert.name}</h4>
                <div className="text-gray-400 text-sm">{cert.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
            <span className="text-blue-500 font-mono">03.</span> Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/6e1d83cc-3a9f-4c0a-9830-c7bf5b3087ae/projects-bg-4513cce7-1773305064176.webp)` }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono bg-blue-600 text-white px-2 py-1 rounded">
                    {project.dates}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.details[0]}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="text-white hover:text-blue-500 flex items-center gap-2 text-sm font-medium transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <button onClick={() => toast.info('Project link coming soon!')} className="text-white hover:text-blue-500 flex items-center gap-2 text-sm font-medium transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          <span className="text-blue-500 font-mono">04.</span> Tech Stack
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="text-blue-500" /> Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map(skill => (
                <span key={skill} className="px-4 py-2 bg-black border border-white/10 rounded-lg text-gray-300 hover:border-blue-500/50 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-500" /> Developer Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.developerTools.map(tool => (
                <span key={tool} className="px-4 py-2 bg-black border border-white/10 rounded-lg text-gray-300 hover:border-blue-500/50 transition-colors cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Your message has been sent (simulated).');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400">Let's discuss how we can work together on your next project.</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-4 rounded-xl">
                  <Mail className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a href={`mailto:${personalData.email}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-4 rounded-xl">
                  <Phone className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <a href={`tel:${personalData.phone}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {personalData.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-4 rounded-xl">
                  <ExternalLink className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-gray-400">{personalData.location}</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <textarea 
                  rows={5} 
                  placeholder="Your Message" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 inline-block">
            ET.
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href={`https://github.com/${personalData.github}`} target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/eyob-tamiru" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500/30 selection:text-blue-200 scroll-smooth">
      <Toaster position="top-right" richColors />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}