
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Mic, 
  ArrowRight,
  Settings,
  HelpCircle,
  ChevronLeft,
  Command,
  Zap,
  BrainCircuit,
  Award,
  CircleCheck,
  ChevronRight,
  Activity,
  Shield,
  Gauge,
  Cpu,
  Fingerprint,
  CloudLightning,
  Wifi,
  Server,
  Link
} from 'lucide-react';
import { ToolConfig, ToolType, ChatMessage } from '../types';
import { getGeminiResponse, generateSpeech, decodeBase64, decodeAudioData } from '../services/geminiService';
import FigmaMock from './FigmaMock';
import BlenderMock from './BlenderMock';
import CodeMock from './CodeMock';
import TradingMock from './TradingMock';

interface TitiaSessionProps {
  tool: ToolConfig;
  onExit: () => void;
}

const TitiaSession: React.FC<TitiaSessionProps> = ({ tool, onExit }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTitiaThinking, setIsTitiaThinking] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [masteryProgress, setMasteryProgress] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isProvisioning, setIsProvisioning] = useState(true);
  const [connectionMode, setConnectionMode] = useState<'cloud' | 'hybrid'>('cloud');
  
  // HUD Stats (Cloud Infrastructure metrics)
  const [latency, setLatency] = useState(12);
  const [gpuLoad, setGpuLoad] = useState(94);

  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Define utility functions above useEffect hooks to avoid reference errors
  const speak = async (text: string) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    
    setIsSpeaking(true);
    try {
      const audioData = await generateSpeech(text);
      if (audioData && audioContextRef.current) {
        const decoded = decodeBase64(audioData);
        const audioBuffer = await decodeAudioData(decoded, audioContextRef.current);
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        nextStartTimeRef.current = Math.max(nextStartTimeRef.current, audioContextRef.current.currentTime);
        source.start(nextStartTimeRef.current);
        nextStartTimeRef.current += audioBuffer.duration;
        source.onended = () => setIsSpeaking(false);
      } else {
        setIsSpeaking(false);
      }
    } catch (e) {
      console.error(e);
      setIsSpeaking(false);
    }
  };

  const greet = async () => {
    const text = `Neural Sandbox Provisioned for ${tool.name}. Cloud instance is live and responsive. I have mapped the primary interaction manifold. Focus on the toolbar to initiate your mastery protocol.`;
    const initialMessage: ChatMessage = {
      role: 'model',
      text,
      timestamp: Date.now()
    };
    setMessages([initialMessage]);
    setHighlightId('toolbar');
    await speak(text);
  };

  useEffect(() => {
    // Provisioning simulation
    const timer = setTimeout(() => {
        setIsProvisioning(false);
        greet();
    }, 2500);
    // Fix: replaced setTimeout with clearTimeout in the destructor to correctly clean up the effect
    return () => clearTimeout(timer);
  }, [tool]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    const interval = setInterval(() => {
        setLatency(prev => Math.min(Math.max(prev + (Math.random() * 2 - 1), 8), 24));
        setGpuLoad(prev => Math.min(Math.max(prev + (Math.random() * 4 - 2), 70), 99));
    }, 3000);
    return () => clearInterval(interval);
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTitiaThinking(true);
    try {
      const result = await getGeminiResponse(inputValue, tool.name);
      const modelMsg: ChatMessage = { 
        role: 'model', 
        text: result.text, 
        timestamp: Date.now(),
        sources: result.sources // Technical Fix: Capture grounding sources
      };
      setMessages(prev => [...prev, modelMsg]);
      if (result.text) await speak(result.text);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTitiaThinking(false);
    }
  };

  const nextTask = () => {
    if (activeStep === 1 && !quizComplete) {
       setShowQuiz(true);
       speak("Concept Validation required. Verify the underlying architecture before proceeding with advanced manipulation.");
       return;
    }
    setActiveStep(s => s + 1);
    setMasteryProgress(prev => Math.min(prev + 33, 100));
    setHighlightId(activeStep === 0 ? 'layers' : 'canvas');
    if (activeStep === 0) {
      speak("Optimal. Structural nodes are now mapped in the virtual instance.");
    }
  };

  const handleQuizAnswer = (correct: boolean) => {
    if (correct) {
      setQuizComplete(true);
      setShowQuiz(false);
      setMasteryProgress(prev => Math.min(prev + 15, 100));
      speak("Validation successful. Mastery affinity increased. Accessing deep visual layers.");
      nextTask();
    } else {
      speak("Validation failure. Rerouting logic streams for clearer comprehension.");
    }
  };

  const renderToolMock = () => {
    switch (tool.id) {
      case ToolType.FIGMA: return <FigmaMock highlightId={highlightId} />;
      case ToolType.BLENDER: return <BlenderMock highlightId={highlightId} />;
      case ToolType.C_PROG: return <CodeMock highlightId={highlightId} />;
      case ToolType.CRYPTO: return <TradingMock highlightId={highlightId} />;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#020205] overflow-hidden text-white font-sans selection:bg-indigo-500/30">
      
      {/* Simulation Workspace Panel */}
      <div className="flex-1 flex flex-col relative border-r border-white/5">
        <div className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-black/80 backdrop-blur-2xl z-30">
          <div className="flex items-center gap-12">
            <button onClick={onExit} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all">
              <ChevronLeft size={18} /> Exit Sandbox
            </button>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/20">Mastery Level</span>
                 <div className="flex items-center gap-4 mt-1">
                    <div className="w-64 h-2 bg-white/5 rounded-full overflow-hidden relative">
                       <motion.div 
                         animate={{ width: `${masteryProgress}%` }}
                         className="h-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,1)]" 
                       />
                    </div>
                    <span className="text-[12px] font-black text-indigo-400 font-mono">{masteryProgress.toFixed(0)}%</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <button 
               onClick={() => setConnectionMode(connectionMode === 'cloud' ? 'hybrid' : 'cloud')}
               className={`flex items-center gap-3 px-5 py-2 rounded-full border transition-all ${connectionMode === 'hybrid' ? 'bg-indigo-600/10 border-indigo-500 text-indigo-400' : 'bg-white/5 border-white/5 text-white/40'}`}
             >
                {connectionMode === 'hybrid' ? <Link size={14} /> : <Wifi size={14} />}
                <span className="text-[10px] font-black uppercase tracking-widest">{connectionMode === 'cloud' ? 'Cloud Only' : 'Hybrid Sync'}</span>
             </button>
             <div className="flex items-center gap-4 bg-white/5 px-6 py-2 rounded-full border border-white/5">
                <Activity size={14} className="text-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{latency.toFixed(0)} ms</span>
             </div>
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white cursor-pointer transition-all border border-white/5">
                <Settings size={18} />
             </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence>
            {isProvisioning ? (
              <motion.div 
                key="provisioning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#020205]"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full mb-12 shadow-[0_0_50px_rgba(99,102,241,0.2)]"
                />
                <h3 className="text-2xl font-black tracking-[0.4em] uppercase mb-4">Allocating Neural Resources</h3>
                <p className="text-white/20 font-black uppercase text-[10px] tracking-[0.6em]">Initializing Virtual ${tool.name} Core...</p>
              </motion.div>
            ) : renderToolMock()}
          </AnimatePresence>
          
          {/* Neural Quiz Overlay */}
          <AnimatePresence>
            {showQuiz && (
              <motion.div 
                initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
                exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-black/60"
              >
                <div className="w-[580px] glass-panel p-16 rounded-[64px] shadow-3xl border-indigo-500/20 text-center relative overflow-hidden">
                  <div className="w-24 h-24 rounded-[32px] bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-12 text-indigo-400">
                    <BrainCircuit size={48} />
                  </div>
                  <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase">Protocol Validation</h3>
                  <p className="text-white/50 mb-14 font-medium text-lg">Titia requires structural confirmation for this ${tool.name} sequence.</p>
                  
                  <div className="grid grid-cols-1 gap-5">
                    {['Modular Inheritance Logic', 'Contextual Sandbox Mapping', 'Cloud Shader Protocols'].map((ans, idx) => (
                      <button 
                        key={ans}
                        onClick={() => handleQuizAnswer(idx === 0)} 
                        className="w-full py-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white hover:text-black hover:border-white font-black text-sm tracking-widest uppercase transition-all duration-500"
                      >
                        {ans}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Guide Controller HUD */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-8"
          >
            <div className="glass-panel px-12 py-8 rounded-[40px] flex items-center justify-between shadow-[0_40px_100px_rgba(0,0,0,0.7)] border-white/10 relative overflow-hidden group">
              <div className="flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-3">
                   <div className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse"></div>
                   <span className="text-[11px] text-indigo-400 font-black uppercase tracking-[0.4em]">Sandbox Step 0{activeStep + 1}</span>
                </div>
                <span className="text-lg font-bold tracking-tight text-white/90">
                  {activeStep === 0 ? "Provisioning Component Logic" : activeStep === 1 ? "Integrated Resource Mapping" : "Final Neural Finalization"}
                </span>
              </div>
              <button 
                onClick={nextTask}
                className="bg-white text-black hover:bg-indigo-500 hover:text-white h-20 w-20 rounded-[32px] flex items-center justify-center transition-all duration-700 shadow-2xl group active:scale-95"
              >
                <ChevronRight size={40} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Titia Intelligence Sidebar */}
      <div className="w-[520px] flex flex-col bg-[#050508] relative z-50 border-l border-white/5">
        <div className="p-14 border-b border-white/5 bg-black/20">
          <div className="flex items-center gap-8 mb-16">
            <div className="relative">
              <div className={`w-20 h-20 rounded-[28px] bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center shadow-inner ${isSpeaking ? 'ring-2 ring-indigo-500/50' : ''}`}>
                 <Command size={42} className={`transition-all duration-700 ${isSpeaking ? 'text-indigo-400 scale-110' : 'text-indigo-600'}`} strokeWidth={3} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-black text-[14px] tracking-[0.4em] uppercase text-white/90">TITIA NEURAL LAB</h2>
              <div className="flex items-center gap-3">
                 <div className={`w-2.5 h-2.5 rounded-full ${isSpeaking ? 'bg-indigo-500' : 'bg-green-500'}`}></div>
                 <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em]">{isSpeaking ? 'Synthesizing Insight' : 'Environment Synced'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
             <div className="glass-panel p-8 rounded-[40px] border-white/5 flex flex-col gap-4">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Neural Compute Load</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black tracking-tighter text-white">{gpuLoad.toFixed(0)}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ width: `${gpuLoad}%` }}
                     className="h-full bg-indigo-500" 
                   />
                </div>
             </div>
             <div className="glass-panel p-8 rounded-[40px] border-white/5 flex flex-col gap-4">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Stream Quality</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black tracking-tighter text-indigo-400">P4</span>
                   <span className="text-xs font-black opacity-20 uppercase tracking-widest">Ultra</span>
                </div>
                <div className="flex gap-1">
                   {Array.from({length: 8}).map((_, i) => (
                     <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 7 ? 'bg-indigo-500/40' : 'bg-white/5'}`} />
                   ))}
                </div>
             </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-14 py-12 space-y-16 scroll-smooth no-scrollbar bg-[#020205]">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-3 mb-4 px-2">
                   {msg.role === 'model' && <Server size={12} className="text-indigo-400" />}
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">
                     {msg.role === 'user' ? 'Practitioner' : 'Titia System'}
                   </span>
                </div>
                <div className={`p-9 rounded-[40px] text-[17px] leading-snug font-medium tracking-tight shadow-xl max-w-[100%] transition-all ${
                  msg.role === 'user' 
                    ? 'bg-white text-black font-bold shadow-[0_20px_50px_rgba(255,255,255,0.1)]' 
                    : 'bg-white/[0.04] text-white/90 border border-white/10 backdrop-blur-3xl'
                }`}>
                  {msg.text}
                  
                  {/* Technical Fix: Mandatory UI display for grounding sources as per guidelines */}
                  {msg.role === 'model' && msg.sources && msg.sources.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Knowledge Sources</span>
                      <div className="flex flex-wrap gap-3">
                        {msg.sources.map((source, idx) => (
                          <a 
                            key={idx} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-400 font-bold hover:bg-indigo-500 hover:text-white transition-all"
                          >
                            <Link size={12} /> {source.title || 'Source'}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTitiaThinking && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start px-2">
              <div className="bg-white/5 px-8 py-5 rounded-[30px] flex gap-3 items-center border border-white/5">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400">Analyzing Instance...</span>
              </div>
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-14 border-t border-white/5 bg-black/60 backdrop-blur-3xl relative">
          <div className="relative group">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
              placeholder="Inject Neural Command..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-[40px] py-10 px-12 text-[17px] placeholder:text-white/10 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all resize-none min-h-[180px] font-medium tracking-tight"
            />
            <div className="absolute right-10 bottom-10 flex items-center gap-6">
               <button 
                 onClick={handleSendMessage}
                 className="w-16 h-16 bg-white text-black rounded-3xl flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-700 shadow-3xl active:scale-90"
               >
                 <CloudLightning size={24} strokeWidth={3} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitiaSession;
