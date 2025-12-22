
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Frame, Type, Image as ImageIcon, Search, Layout, Plus, Share2, Grid3X3, Layers as LayersIcon, ChevronDown, Eye, EyeOff, Lock } from 'lucide-react';

interface FigmaMockProps {
  highlightId: string | null;
}

const FigmaMock: React.FC<FigmaMockProps> = ({ highlightId }) => {
  return (
    <div className="w-full h-full flex flex-col text-white/40 bg-[#1e1e1e] font-sans overflow-hidden">
      {/* Figma Toolbar - Superior Build */}
      <div id="toolbar" className={`h-11 bg-[#2c2c2c] border-b border-black flex items-center px-3 gap-6 shrink-0 transition-all duration-700 relative z-10 ${highlightId === 'toolbar' ? 'ring-2 ring-indigo-500 ring-inset shadow-[0_0_30px_rgba(99,102,241,0.2)]' : ''}`}>
        <div className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"><Grid3X3 size={18} /></div>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 border border-blue-500/20"><MousePointer2 size={16} strokeWidth={2.5} /></div>
          <Frame size={16} strokeWidth={2.5} className="hover:text-white transition-colors cursor-pointer" />
          <div className="w-[1px] h-4 bg-white/10 mx-1" />
          <div className="flex items-center gap-4 opacity-80">
            <Type size={16} strokeWidth={2.5} className="hover:text-white cursor-pointer" />
            <ImageIcon size={16} strokeWidth={2.5} className="hover:text-white cursor-pointer" />
            <Plus size={16} strokeWidth={2.5} className="hover:text-white cursor-pointer" />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#383838] text-white text-[11px] font-bold border border-white/5 hover:bg-[#444] transition-all cursor-pointer">
            100% <ChevronDown size={12} />
          </div>
          <div className="px-5 py-1.5 rounded-lg bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-500 transition-colors cursor-pointer">Share</div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] font-black text-white shadow-lg">JD</div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Navigation / Layers Panel */}
        <div id="layers" className={`w-64 bg-[#2c2c2c] border-r border-black flex flex-col transition-all duration-700 ${highlightId === 'layers' ? 'bg-indigo-500/5 ring-1 ring-indigo-500 ring-inset' : ''}`}>
          <div className="h-10 flex items-center justify-between px-4 border-b border-black/50">
            <div className="flex gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Layers</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Assets</span>
            </div>
            <LayersIcon size={14} className="opacity-20" />
          </div>
          <div className="p-2 space-y-0.5 overflow-y-auto">
            <div className="flex items-center gap-2 text-[11px] font-bold text-white/90 p-2 rounded-lg bg-blue-500/10 border border-blue-500/10 cursor-pointer group">
              <Frame size={12} className="text-purple-400" /> 
              <span>Neural Landing Page</span>
              <Eye size={12} className="ml-auto opacity-0 group-hover:opacity-100" />
            </div>
            {[
              { icon: <Layout size={12} />, name: 'Navigation Header', depth: 4 },
              { icon: <Type size={12} />, name: 'Hero Title', depth: 8, active: true },
              { icon: <ImageIcon size={12} />, name: 'Main Visual Asset', depth: 4 },
              { icon: <Plus size={12} />, name: 'Action Button', depth: 8 },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-2 text-[11px] p-2 rounded-lg hover:bg-white/5 cursor-pointer group ${item.active ? 'text-blue-400 font-bold' : ''}`} style={{ paddingLeft: `${item.depth * 4}px` }}>
                {item.icon}
                <span className="truncate">{item.name}</span>
                <div className="ml-auto flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={12} />
                  <Lock size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Canvas Area */}
        <div id="canvas" className={`flex-1 bg-[#1a1a1a] relative flex items-center justify-center overflow-hidden transition-all duration-700 ${highlightId === 'canvas' ? 'bg-indigo-500/[0.03]' : ''}`}>
           {/* Figma UI grid infrastructure */}
           <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           
           <motion.div 
             layout
             className="w-[420px] h-[640px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative rounded-lg border border-black/10 overflow-hidden flex flex-col"
           >
             <div className="h-16 bg-white flex items-center px-8 border-b border-gray-100">
                <div className="w-12 h-3 bg-indigo-500 rounded-full"></div>
                <div className="ml-auto flex gap-4">
                   <div className="w-8 h-1.5 bg-gray-100 rounded"></div>
                   <div className="w-8 h-1.5 bg-gray-100 rounded"></div>
                </div>
             </div>
             <div className="p-12 space-y-10 flex-1 flex flex-col">
                <div className="space-y-4">
                  <div className="h-1.5 bg-indigo-500/10 w-20 rounded"></div>
                  <div className="h-12 bg-gray-900 w-full rounded-2xl"></div>
                  <div className="h-6 bg-gray-50 w-3/4 rounded-lg"></div>
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-[32px] border border-dashed border-gray-200 flex flex-col items-center justify-center gap-5 group cursor-pointer hover:border-indigo-500/30 transition-colors">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center"
                  >
                    <ImageIcon size={28} className="text-indigo-500" strokeWidth={1.5} />
                  </motion.div>
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Upload High-Res Media</span>
                </div>

                <div className="pt-10">
                   <div className="h-14 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 transition-colors cursor-pointer"></div>
                </div>
             </div>
           </motion.div>

           {/* Precision Marker overlay */}
           {highlightId === 'canvas' && (
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-500 w-[428px] h-[648px] rounded-xl pointer-events-none"
             >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2">
                   <div className="bg-indigo-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-2xl">Frame Interaction Active</div>
                </div>
             </motion.div>
           )}
        </div>

        {/* Global Inspector / Properties */}
        <div className="w-64 bg-[#2c2c2c] border-l border-black flex flex-col p-5 gap-10 overflow-y-auto">
           <section>
             <span className="text-[10px] font-black text-white/20 mb-5 block uppercase tracking-[0.2em]">Frame Dimensions</span>
             <div className="grid grid-cols-2 gap-3 font-mono">
               <div className="bg-[#1e1e1e] p-2.5 border border-white/5 rounded-lg flex justify-between items-center text-[11px] text-white/90">
                 <span className="opacity-30">W</span> 420
               </div>
               <div className="bg-[#1e1e1e] p-2.5 border border-white/5 rounded-lg flex justify-between items-center text-[11px] text-white/90">
                 <span className="opacity-30">H</span> 640
               </div>
               <div className="bg-[#1e1e1e] p-2.5 border border-white/5 rounded-lg flex justify-between items-center text-[11px] text-white/90">
                 <span className="opacity-30">X</span> 882
               </div>
               <div className="bg-[#1e1e1e] p-2.5 border border-white/5 rounded-lg flex justify-between items-center text-[11px] text-white/90">
                 <span className="opacity-30">Y</span> 214
               </div>
             </div>
           </section>
           
           <section>
             <span className="text-[10px] font-black text-white/20 mb-4 block uppercase tracking-[0.2em]">Visual Fill</span>
             <div className="flex items-center gap-3 bg-[#1e1e1e] p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
               <div className="w-8 h-8 bg-white rounded-lg border border-white/10 shadow-inner"></div>
               <div className="flex flex-col">
                 <span className="text-[11px] font-black text-white/90">#FFFFFF</span>
                 <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Solid · 100%</span>
               </div>
               <ChevronDown size={14} className="ml-auto opacity-20" />
             </div>
           </section>

           <section>
             <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Constraints</span>
                <Layout size={12} className="opacity-20" />
             </div>
             <div className="aspect-square bg-[#1e1e1e] rounded-xl border border-white/5 flex items-center justify-center relative">
                <div className="w-1/2 h-1/2 border border-dashed border-indigo-500/40 rounded"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-px h-full bg-white/5 absolute left-1/2"></div>
                   <div className="w-full h-px bg-white/5 absolute top-1/2"></div>
                </div>
             </div>
           </section>
        </div>
      </div>
    </div>
  );
};

export default FigmaMock;
