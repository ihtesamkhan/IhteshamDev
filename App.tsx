
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  Send, 
  ChevronUp, 
  Code2, 
  Github, 
  Mail, 
  Globe, 
  Database, 
  Cpu, 
  Layers,
  Smartphone,
  Server
} from 'lucide-react';
import { NAV_LINKS, SKILLS, PROJECTS, TESTIMONIALS, SOCIALS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-text">Ihtesham<span className="text-white">.Dev</span></a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-purple-400 transition-colors uppercase tracking-wider">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-purple-400"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-12 text-center">
    <motion.h4 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-2"
    >
      {subtitle}
    </motion.h4>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold"
    >
      {title}
    </motion.h2>
  </div>
);

const SkillIcon = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case 'Code2': return <Code2 size={24} />;
    case 'Database': return <Database size={24} />;
    case 'Cpu': return <Cpu size={24} />;
    case 'Layers': return <Layers size={24} />;
    case 'Smartphone': return <Smartphone size={24} />;
    case 'Server': return <Server size={24} />;
    default: return <Globe size={24} />;
  }
};

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20 mb-6">
              Full Stack Engineer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I'm <span className="gradient-text">Ihtesham</span> <br />
              Web Developer
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Crafting immersive digital experiences through clean code and innovative design. I build high-performance applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1">
                View My Work <ArrowRight size={20} />
              </a>
              <button className="border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
                Download Resume <Download size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-3xl rotate-6 animate-pulse blur-xl opacity-20"></div>
              <div className="relative w-full h-full rounded-3xl border-2 border-white/10 overflow-hidden glass-card p-2 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Ihtesham Developer" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2 max-w-md mx-auto">
                 <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Work Station" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 md:right-12 glass-card p-6 rounded-2xl border-purple-500/30">
                <p className="text-4xl font-bold text-purple-500">150+</p>
                <p className="text-sm font-medium text-slate-400">Commits This Week</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-2">My Journey</h4>
              <h2 className="text-4xl font-bold mb-6">Turning Complex Problems Into Elegant Solutions</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                I'm a full-stack developer with a passion for building software that makes a difference. My work sits at the intersection of powerful backend logic and beautiful frontend interfaces.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                With expertise across the entire JavaScript ecosystem, I help startups and established companies launch products that are scalable, secure, and delightful to use.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-colors">
                  <p className="text-slate-200 font-bold text-xl">5+ Years</p>
                  <p className="text-slate-500 text-sm">Professional Experience</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-blue-500/30 transition-colors">
                  <p className="text-slate-200 font-bold text-xl">40+ Clients</p>
                  <p className="text-slate-500 text-sm">Global Collaborations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Technical Stack" subtitle="Excellence" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:border-purple-500/40 transition-all group"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <SkillIcon iconName={skill.icon} />
                  </div>
                  <span className="text-2xl font-bold text-white">{skill.percentage}%</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">{skill.name}</h3>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Recent Projects" subtitle="Showcase" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden glass-card border-none"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex gap-4">
                    <a href={project.demoUrl} className="text-sm font-bold flex items-center gap-2 hover:text-purple-400 transition-colors">
                      Live Preview <ArrowRight size={16} />
                    </a>
                    <a href={project.githubUrl} className="text-sm font-bold flex items-center gap-2 hover:text-purple-400 transition-colors">
                      View Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center gap-2">
              Explore Full Gallery <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Trusted by Leaders" subtitle="Recognition" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-purple-500/30 object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-400 italic leading-relaxed">"{t.content}"</p>
                <div className="mt-6 flex text-yellow-500 gap-1">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-2">Connect</h4>
              <h2 className="text-5xl font-bold mb-6">Let's Discuss Your <span className="gradient-text">Future Project</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Ready to take your digital presence to the next level? Fill out the form or reach out through social channels. I usually respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email Me Directly</p>
                    <p className="text-lg font-bold">hello@ihtesham.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Work Zone</p>
                    <p className="text-lg font-bold">GMT +0 (Remote Ready)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                {SOCIALS.map((social) => (
                  <a key={social.name} href={social.href} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-3xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                    <input type="text" placeholder="Jane Doe" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 transition-all text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                    <input type="email" placeholder="jane@company.com" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 transition-all text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                  <input type="text" placeholder="How can I help you?" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Project Details</label>
                  <textarea rows={5} placeholder="Tell me more about the project scope..." className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500 transition-all resize-none text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]">
                  Start Collaboration <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="#home" className="text-2xl font-bold gradient-text">Ihtesham<span className="text-white">.Dev</span></a>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ihtesham Developer. All rights reserved. Built with React & Tailwind.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-600/20 text-white hover:bg-purple-700 z-40 transition-all"
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
