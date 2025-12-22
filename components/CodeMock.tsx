
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileCode, Play, Save, Search, GitBranch, Settings, Layout, ChevronRight, Cpu, MemoryStick as Memory, Activity } from 'lucide-react';

interface CodeMockProps {
  highlightId: string | null;
}

const CodeMock: React.FC<CodeMockProps> = ({ highlightId }) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#0b0d0f] text-white/40 font-mono text-[13px] overflow-hidden">
      {/* Activity Bar - Superior Build */}
      <div className="flex-1 flex overflow-hidden">
        <div id="toolbar" className={`w-14 bg-[#111418] border-r border-white/5 flex flex-col items-center py-8 gap-8 shrink-0 transition-all duration-700 relative z-20 ${highlightId === 'toolbar' ? 'ring-2 ring-blue-500/50 bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : ''}`}>
           <FileCode size={22} className="text-white" strokeWidth={2} />
           <Search size={22} className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer" />
           <GitBranch size={22} className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer" />
           <Cpu size={22} className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer" />
           
           <div className="mt-auto space-y-6 flex flex-col items-center mb-6">
             <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-lg">
               <Play size={20} fill="currentColor" strokeWidth={0} />
             </div>
             <Settings size={20} className="opacity-30 hover:opacity-100 transition-opacity cursor-pointer" />
           </div>
        </div>

        {/* Logic Sidebar / Explorer */}
        <div id="layers" className={`w-64 bg-[#0f1115] border-r border-white/5 flex flex-col transition-all duration-700 ${highlightId === 'layers' ? 'bg-blue-500/5 ring-1 ring-blue-500 ring-inset' : ''}`}>
           <div className="h-12 flex items-center justify-between px-5 border-b border-white/5">
             <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.25em]">Explorer</span>
             <Layout size={14} className="opacity-20" />
           </div>
           <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 text-white/90 bg-white/5 p-2 rounded-lg border border-white/5 cursor-pointer font-bold transition-all">
                <FileCode size={14} className="text-blue-400" /> 
                <span className="flex-1">mastery_engine.c</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              </div>
              <div className="flex items-center gap-3 pl-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                <FileCode size={14} className="text-purple-400" /> memory_hooks.h
              </div>
              <div className="flex items-center gap-3 pl-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                <Settings size={14} className="text-orange-400" /> Makefile
              </div>
           </div>
           
           <div className="mt-auto p-5 border-t border-white/5 bg-black/20">
              <span className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-4 block">Memory Profile</span>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px]">
                   <span>Heap Active</span>
                   <span className="text-blue-400 font-bold">1.2 MB</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: '40%' }}
                     className="h-full bg-blue-500" 
                   />
                </div>
              </div>
           </div>
        </div>

        {/* Editor Kernel */}
        <div id="canvas" className={`flex-1 flex flex-col transition-all duration-700 bg-[#080a0c] ${highlightId === 'canvas' ? 'bg-blue-500/[0.02]' : ''}`}>
           <div className="h-10 bg-[#0f1115] flex items-center px-4 border-b border-white/5">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#080a0c] border border-white/5 rounded-t-lg text-xs font-bold text-blue-400 relative">
                 <FileCode size={12} /> mastery_engine.c
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500"></div>
              </div>
           </div>
           
           <div className="flex-1 overflow-auto p-10 leading-relaxed custom-scrollbar">
              <div className="flex gap-8 group">
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">01</span>
                <span className="text-pink-500">#include</span> <span className="text-orange-300">&lt;stdio.h&gt;</span>
              </div>
              <div className="flex gap-8 group">
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">02</span>
                <span className="text-pink-500">#include</span> <span className="text-orange-300">&lt;stdlib.h&gt;</span>
              </div>
              <div className="h-4"></div>
              <div className="flex gap-8 group">
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">04</span>
                <div><span className="text-blue-300 font-bold">int</span> <span className="text-yellow-200">main</span>(<span className="text-blue-300">int</span> argc, <span className="text-blue-300">char</span> **argv) {"{"}</div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-8 group py-1 bg-blue-500/5 rounded"
              >
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">05</span>
                <div className="pl-6 border-l-2 border-blue-500/20">
                  <span className="text-white/20 font-black italic select-none mr-4">// Titia Neural Tip: Memory allocation check requested</span><br/>
                  <span className="text-blue-300 font-bold">int</span> *neural_data = (<span className="text-blue-300">int</span>*)<span className="text-yellow-200">malloc</span>(<span className="text-blue-300">sizeof</span>(<span className="text-blue-300">int</span>) * <span className="text-orange-400">1024</span>);
                </div>
              </motion.div>
              <div className="flex gap-8 group">
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">06</span>
                <div className="pl-6"><span className="text-pink-400">if</span> (neural_data == <span className="text-pink-500">NULL</span>) <span className="text-pink-400">return</span> <span className="text-orange-400">1</span>;</div>
              </div>
              <div className="h-4"></div>
              <div className="flex gap-8 group">
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">08</span>
                <div className="pl-6">
                  <span className="text-green-300">printf</span>(<span className="text-orange-300">"Neural Mastery: Syncing System Context...\n"</span>);
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">09</span>
                <div className="pl-6"><span className="text-pink-400">return</span> <span className="text-orange-400">0</span>;</div>
              </div>
              <div className="flex gap-8 group">
                <span className="w-8 text-right opacity-10 font-bold select-none group-hover:opacity-40 transition-opacity">10</span>
                <div>{"}"}</div>
              </div>
           </div>
           
           {/* Integrated Neural Terminal */}
           <div className="h-56 bg-[#0b0d0f] border-t border-white/10 flex flex-col shadow-2xl">
              <div className="h-10 bg-[#0f1115] flex items-center px-6 gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                 <div className="flex items-center gap-2 text-white border-b-2 border-blue-500 pb-2 transition-all cursor-pointer">
                   <Terminal size={14} /> Terminal
                 </div>
                 <span className="hover:text-white transition-colors cursor-pointer">Debug Output</span>
                 <span className="hover:text-white transition-colors cursor-pointer">Neural Console</span>
                 <div className="ml-auto flex items-center gap-3">
                    <Activity size={14} className="text-green-500 animate-pulse" />
                    <span className="text-green-500 font-bold">READY</span>
                 </div>
              </div>
              <div className="p-6 text-[12px] leading-relaxed custom-scrollbar overflow-auto">
                 <div className="flex gap-3"><span className="text-indigo-500 font-bold">titia@system:</span><span className="text-white/40">~ (master)</span></div>
                 <div className="text-white/30">$ gcc mastery_engine.c -o engine -lpthread</div>
                 <div className="text-white/30">$ ./engine --neural-mode --verbose</div>
                 <div className="text-green-400 mt-2 font-bold px-4 py-2 bg-green-500/5 rounded-xl border border-green-500/10 inline-block">
                    [TITIA] Neural Mastery Session Initialized Successfully.
                 </div>
                 <div className="text-white/20 mt-2 pl-4 border-l-2 border-white/5">
                    Process Hooked: ID 40219<br/>
                    Context Sync: High Affinity
                 </div>
                 <div className="flex gap-2 mt-4"><span className="text-indigo-500 font-bold">titia@system:</span><span className="animate-pulse">_</span></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CodeMock;
