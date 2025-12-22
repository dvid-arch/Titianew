
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Figma, 
  Box, 
  Code, 
  TrendingUp, 
  Sparkles,
  Command,
  ArrowRight,
  Zap,
  Target,
  BrainCircuit,
  MousePointerClick,
  Monitor,
  X,
  Laptop,
  User,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  ChevronRight,
  Globe,
  Lock,
  Star,
  Download,
  CheckCircle2,
  CloudLightning,
  Server,
  Plus,
  Quote
} from 'lucide-react';
import { ToolType, ToolConfig } from './types';
import TitiaSession from './components/TitiaSession';

const TOOLS: ToolConfig[] = [
  { 
    id: ToolType.FIGMA, 
    name: 'Figma Mastery', 
    icon: 'figma', 
    description: 'Cloud-native Design Engine.',
    primaryColor: 'from-[#FF7262] to-[#A259FF]'
  },
  { 
    id: ToolType.BLENDER, 
    name: 'Blender 3D', 
    icon: 'blender', 
    description: 'Remote GPU Neural Render.',
    primaryColor: 'from-[#EA7600] to-[#27A1E1]'
  },
  { 
    id: ToolType.C_PROG, 
    name: 'System Kernel', 
    icon: 'code', 
    description: 'Virtual Runtime Lab.',
    primaryColor: 'from-[#00599C] to-[#004482]'
  },
  { 
    id: ToolType.CRYPTO, 
    name: 'Quant Flow', 
    icon: 'trending', 
    description: 'High-freq cloud harmonics.',
    primaryColor: 'from-[#00FFA3] to-[#0052FF]'
  }
];

const TESTIMONIALS = [
  {
    name: "Emma Brooks",
    role: "Lead Designer at Samsung",
    text: "Real-time Progress Tracking boosted productivity with AI-powered task management. Titia organizes, prioritizes, and streamlines my creative workflow effortlessly.",
    avatar: "EB"
  },
  {
    name: "Eiden Horran",
    role: "HR Manager at Attentive",
    text: "Seamless Task Management and AI-driven automation. Instantly organize, track, and prioritize tasks. The Cloud Sandbox changed how we onboard new designers.",
    avatar: "EH"
  },
  {
    name: "Elie Laksono",
    role: "Product Manager at Webflow",
    text: "Simplify your day with smart scheduling and automated adjustments. Automatically adjust priorities for maximum efficiency and improved task management.",
    avatar: "EL"
  }
];

const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolConfig | null>(null);
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLaunch = () => {
    setIsLaunched(true);
  };

  if (isLaunched && selectedTool) {
    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key="session"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#020308]"
        >
          <TitiaSession tool={selectedTool} onExit={() => setIsLaunched(false)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen relative z-10 selection:bg-indigo-500/30 overflow-x-hidden bg-[#020308]">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl border-b border-white/5 bg-black/40">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center py-6 px-8 md:px-20">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 bg-white text-black rounded-[14px] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-all">
              <Command size={22} strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">titia</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
            {['Cloud Lab', 'Protocol', 'Expertise', 'Pricing', 'Testimonials'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
            ))}
          </nav>
          
          <button className="px-8 py-3.5 rounded-full bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-xl shadow-indigo-600/20">
            Get Started
          </button>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto pt-48 px-8 md:px-20">
        
        {/* HERO SECTION - REFINED TYPOGRAPHY TO PREVENT CLIPPING */}
        <section className="flex flex-col items-center mb-64" id="home">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[11px] font-black uppercase tracking-[0.6em] text-indigo-400 mb-14 shadow-[0_0_40px_rgba(99,102,241,0.1)]"
          >
            <CloudLightning size={16} /> Neural Cloud Sandbox v4.2
          </motion.div>

          <div className="relative w-full text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-60 bg-indigo-500/10 blur-[200px] pointer-events-none rounded-full" />
            <motion.span className="text-xl md:text-[36px] font-medium tracking-[0.45em] text-white/30 uppercase mb-6 block">AI That Thinks Ahead</motion.span>
            
            <div className="relative overflow-visible">
              <motion.h1 
                className="text-[50px] sm:text-[80px] md:text-[140px] lg:text-[140px] font-black leading-[0.85] tracking-[-0.05em] text-gradient uppercase mb-12 whitespace-nowrap lg:whitespace-normal"
              >
                EMPOWERING <br className="hidden lg:block" /> MASTERY
              </motion.h1>
            </div>

            <p className="text-lg md:text-2xl text-white/40 max-w-4xl mx-auto font-medium tracking-tight mb-16 leading-tight">
              Unlock real-time intelligence, automation, and predictive analytics with our browser-native virtual instances. No installation required.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <button 
                 onClick={() => setSelectedTool(TOOLS[0])}
                 className="px-12 py-6 rounded-full bg-indigo-600 font-black text-sm uppercase tracking-[0.4em] shadow-2xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
               >
                 Join Waitlist <Plus size={18} />
               </button>
               <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">Global Nodes Active</span>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="mb-64" id="protocol">
           <div className="text-center mb-32">
             <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">Understanding How It Works</h2>
             <span className="text-2xl font-medium text-indigo-500 uppercase tracking-widest">Step by Step</span>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 relative">
             <div className="absolute top-[32px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 hidden lg:block" />
             {[
               { step: '1', title: 'Upload your data', desc: 'Provision your sandbox and map your current workspace state instantly.', icon: <Layers /> },
               { step: '2', title: 'Get actionable insights', desc: 'Titia analyzes your workflow and projects real-time neural guidance.', icon: <Activity /> },
               { step: '3', title: 'Automate & optimize', desc: 'Execute complex operations with AI precision and export globally.', icon: <Cpu /> }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-full bg-[#111] border border-white/10 text-white flex items-center justify-center font-black text-xl mb-12 shadow-2xl group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-700">
                   {item.step}
                 </div>
                 <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase text-white/90">{item.title}</h3>
                 <p className="text-white/40 max-w-xs mx-auto leading-relaxed mb-12">{item.desc}</p>
                 <div className="w-full aspect-video bg-white/[0.02] border border-white/5 rounded-[40px] flex items-center justify-center overflow-hidden relative group-hover:border-indigo-500/20 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Technical Fix: Added explicit generic type to React.cloneElement to prevent 'unknown' props inference error */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 48, className: "text-white/10 group-hover:text-indigo-500/40 transition-all" })}
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* TOOL GRID */}
        <section className="mb-64" id="expertise">
           <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Top <span className="text-indigo-500">Neural Sandbox</span> Modules</h2>
             <p className="text-white/30 font-medium">Provision a high-performance cloud instance in seconds.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {TOOLS.map((tool, index) => (
              <motion.button
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className={`group relative p-12 rounded-[52px] text-left transition-all duration-700 isometric-block flex flex-col gap-12 h-full overflow-hidden ${
                  selectedTool?.id === tool.id ? 'border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500 shadow-[0_40px_80px_rgba(0,0,0,0.5)]' : 'hover:bg-white/[0.04]'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.primaryColor} flex items-center justify-center shadow-3xl group-hover:scale-110 transition-transform`}>
                  {tool.id === ToolType.FIGMA && <Figma size={32} />}
                  {tool.id === ToolType.BLENDER && <Box size={32} />}
                  {tool.id === ToolType.C_PROG && <Code size={32} />}
                  {tool.id === ToolType.CRYPTO && <TrendingUp size={32} />}
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{tool.name}</h3>
                  <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em]">{tool.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                  {selectedTool?.id === tool.id ? 'INSTANCE READY' : 'PROVISION LAB'} <ChevronRight size={16} />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="mb-64" id="testimonials">
           <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">What Our <span className="text-indigo-500">Happy Clients</span> Are Saying</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="glass-panel p-12 rounded-[52px] bg-white/[0.01] border-white/5 flex flex-col gap-10 hover:bg-white/[0.03] transition-all group">
                   <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 font-black text-lg">
                        {t.avatar}
                      </div>
                      <Quote size={24} className="text-white/10 group-hover:text-indigo-500 transition-colors" />
                   </div>
                   <p className="text-lg font-medium text-white/60 leading-relaxed italic">"{t.text}"</p>
                   <div>
                      <h4 className="font-black uppercase tracking-widest text-white">{t.name}</h4>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mt-1">{t.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* PRICING SECTION */}
        <section className="mb-64" id="pricing">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Choose the <span className="text-indigo-500">Perfect Plan</span></h2>
            <p className="text-white/40 font-medium">From individual practitioners to enterprise-level neural networks.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
            {[
              { name: 'Starter Plan', price: '$1,200', features: ['Essential AI tools', 'Cost-effective solution', 'Quick implementation', 'Ideal for small nodes'], popular: false },
              { name: 'Pro Plan', price: '$2,600', features: ['Advanced AI-powered features', 'Custom AI solutions', 'Faster processing time', 'Priority customer support', 'Enhanced scalability'], popular: true },
              { name: 'Enterprise Plan', price: '$4,800', features: ['Complete AI integration', 'Fully tailored AI system', 'Real-time analytics', 'Personalized automation', 'Maximum growth potential'], popular: false }
            ].map((plan, i) => (
              <div key={i} className={`glass-panel p-16 rounded-[60px] flex flex-col border transition-all duration-700 relative overflow-hidden ${plan.popular ? 'border-indigo-500 bg-indigo-900/10 ring-1 ring-indigo-500 scale-105 z-10' : 'border-white/5 bg-white/[0.02]'}`}>
                {plan.popular && (
                   <div className="absolute top-0 right-0 p-8">
                      <Star className="text-indigo-500" fill="currentColor" size={24} />
                   </div>
                )}
                <h3 className="text-3xl font-black mb-10 tracking-tighter uppercase text-white/90">{plan.name}</h3>
                <div className="mb-14">
                   <span className="text-6xl font-black tracking-tighter">${plan.price.replace('$', '')}</span>
                   <span className="text-white/20 ml-4 text-sm uppercase font-black tracking-widest">/ Month</span>
                </div>
                <div className="space-y-6 mb-20 flex-1">
                   {plan.features.map(f => (
                     <div key={f} className="flex items-center gap-4 text-[13px] text-white/50 font-bold uppercase tracking-wider">
                        <CheckCircle2 size={20} className="text-indigo-500 shrink-0" /> {f}
                     </div>
                   ))}
                </div>
                <button className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all ${plan.popular ? 'bg-white text-black hover:bg-indigo-500 hover:text-white' : 'bg-white/5 border border-white/10 hover:bg-white hover:text-black'}`}>
                  Get Started Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="mb-64">
           <div className="glass-panel w-full p-24 rounded-[80px] border-indigo-500/20 bg-gradient-to-br from-indigo-900/40 to-black relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-20">
              <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="max-w-2xl relative z-10">
                 <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Download Now <br/><span className="text-indigo-500">and Get Started Today!</span></h2>
                 <p className="text-white/40 mb-16 text-xl leading-relaxed">Improve diagnostics, predict outcomes, and personalize your mental workspace with Titia Integrated. The future is browser-native.</p>
                 <div className="flex flex-wrap gap-8">
                    <button className="flex items-center gap-5 px-10 py-6 rounded-3xl bg-white text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-500 hover:text-white transition-all shadow-2xl">
                       <Download size={20} /> Download for macOS
                    </button>
                    <button className="flex items-center gap-5 px-10 py-6 rounded-3xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                       <Download size={20} /> Download for Windows
                    </button>
                 </div>
              </div>
              <div className="relative z-10 flex-1 flex justify-center lg:justify-end">
                 <div className="w-[520px] aspect-video bg-[#111] rounded-[48px] border border-white/10 shadow-[0_60px_100px_rgba(0,0,0,0.8)] p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-center opacity-30">
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                       </div>
                       <Activity size={20} />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                       <CloudLightning size={120} className="text-indigo-500/20 animate-pulse" strokeWidth={1} />
                    </div>
                    <div className="h-12 bg-white/5 rounded-2xl flex items-center px-6 text-white/20 text-[10px] font-black uppercase tracking-widest">
                       Instance: titia_cloud_sandbox_v4.2
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black/40 border-t border-white/5 pt-40 pb-20">
        <div className="max-w-[1600px] mx-auto px-12 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
           <div>
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-10 h-10 bg-white text-black rounded-[14px] flex items-center justify-center">
                    <Command size={22} strokeWidth={3} />
                 </div>
                 <span className="text-2xl font-black tracking-tighter uppercase">titia</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed mb-12 font-medium uppercase tracking-wider">Empowering Your Business With Smart Automation — streamline processes, boost efficiency, and unlock new growth opportunities.</p>
           </div>
           
           <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-12">Home</h4>
              <ul className="space-y-6 text-white/40 text-[11px] font-bold uppercase tracking-[0.3em]">
                 <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-12">Solutions</h4>
              <ul className="space-y-6 text-white/40 text-[11px] font-bold uppercase tracking-[0.3em]">
                 <li><a href="#" className="hover:text-white transition-colors">Business Automation</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">AI Integration</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-12">About Us</h4>
              <ul className="space-y-6 text-white/40 text-[11px] font-bold uppercase tracking-[0.3em]">
                 <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
           </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-12 md:px-20 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-10">
           <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">&copy; 2025 NeuralEdge. All Rights Reserved.</span>
           <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-[0.5em] hover:text-white transition-colors">
              Back to Top <ArrowRight className="-rotate-90" size={16} />
           </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
