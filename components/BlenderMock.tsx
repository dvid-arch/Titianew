
import React from 'react';
import { motion } from 'framer-motion';
// Fix: Removed non-existent Cube export from lucide-react
import { Box, Move, RotateCw, Scaling, MousePointer2, Camera, Sun, Layers, Grid, ChevronDown, Play, Settings, Database } from 'lucide-react';

interface BlenderMockProps {
  highlightId: string | null;
}

const BlenderMock: React.FC<BlenderMockProps> = ({ highlightId }) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#141414] text-white/50 overflow-hidden font-mono text-[11px]">
      {/* Precision Top Menu */}
      <div className="h-9 bg-[#242424] border-b border-black flex items-center px-4 gap-6 shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-orange-400 font-black tracking-tighter cursor-pointer">BLENDER</span>
          <div className="flex gap-4 opacity-60">
            {['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Shading'].map(tab => (
              <span key={tab} className={`hover:text-white transition-colors cursor-pointer ${tab === 'Modeling' ? 'text-white font-bold underline underline-offset-4 decoration-orange-500' : ''}`}>{tab}</span>
            ))}
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4 bg-black/20 px-3 py-1 rounded border border-white/5">
           <Play size={12} className="text-green-500" />
           <span className="text-white/80">Scene: Neural_Mastery_v1</span>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Technical Sidebar */}
        <div id="toolbar" className={`w-12 bg-[#242424] border-r border-black flex flex-col items-center py-6 gap-6 transition-all duration-700 relative z-20 ${highlightId === 'toolbar' ? 'ring-2 ring-orange-500/50 bg-orange-500/5' : ''}`}>
           <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg"><MousePointer2 size={16} strokeWidth={2.5} /></div>
           <Move size={16} />
           <RotateCw size={16} />
           <Scaling size={16} />
           <div className="w-6 h-[1px] bg-white/10 mx-auto" />
           <Box size={16} className="text-white opacity-80" />
           <Grid size={16} />
           <div className="mt-auto mb-4 opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
             <Settings size={16} />
           </div>
        </div>

        {/* 3D Viewport Sandbox */}
        <div id="canvas" className={`flex-1 bg-[#0b0b0b] relative flex items-center justify-center transition-all duration-700 overflow-hidden ${highlightId === 'canvas' ? 'bg-orange-500/[0.02]' : ''}`}>
          {/* Viewport Grid Infrastructure */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-full h-px bg-red-500/50"></div>
            <div className="h-full w-px bg-green-500/50"></div>
          </div>
          
          {/* Procedural 3D Geometry Representation */}
          <motion.div 
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 relative preserve-3d"
          >
             <div className="absolute inset-0 bg-orange-500/10 border-2 border-orange-500/40 shadow-[0_0_100px_rgba(234,118,0,0.1)] backdrop-blur-sm transform rotate-x-45 rotate-z-45"></div>
             <div className="absolute inset-0 bg-white/5 border border-white/10 transform translate-z-32 rotate-x-45 rotate-z-45"></div>
             
             {/* Dynamic Vertex Points */}
             {[...Array(8)].map((_, i) => (
               <div key={i} className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(234,118,0,0.8)]" style={{
                 top: i < 4 ? '0' : '100%',
                 left: i % 2 === 0 ? '0' : '100%',
                 transform: `translate(-50%, -50%) translateZ(${i < 4 ? '0' : '32'}px)`
               }}></div>
             ))}
          </motion.div>

          <div className="absolute bottom-6 left-6 flex flex-col gap-2 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
            <span className="text-white font-bold opacity-80 tracking-widest uppercase text-[9px]">Viewport Overlay</span>
            <div className="flex gap-4 opacity-40">
              <span className="text-green-500 font-black">X: 0.00</span>
              <span className="text-red-500 font-black">Y: 1.42</span>
              <span className="text-blue-500 font-black">Z: -0.12</span>
            </div>
          </div>
          
          <div className="absolute top-6 right-6 text-[10px] text-white/30 text-right bg-black/20 p-2 rounded backdrop-blur-sm">
            Persp View<br/>
            Poly Count: 2,402<br/>
            Verts: 1,201
          </div>
        </div>

        {/* Professional Inspector Stack */}
        <div className="w-72 flex flex-col border-l border-black bg-[#1e1e1e]">
          {/* Outliner */}
          <div id="layers" className={`flex-1 p-5 border-b border-black transition-all duration-700 ${highlightId === 'layers' ? 'bg-orange-500/5 ring-1 ring-orange-500 ring-inset' : ''}`}>
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">
              <span>Scene Collection</span>
              <Layers size={14} className="opacity-40" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer opacity-60"><Camera size={12} className="text-yellow-500" /> Mastery_Camera</div>
              <div className="flex items-center gap-3 bg-orange-500/10 text-orange-400 p-2 rounded-lg border border-orange-500/20"><Box size={12} /> Root_Geometry_Cube</div>
              <div className="flex items-center gap-3 pl-4 opacity-40"><Database size={12} /> Neural_Nodes_Stack</div>
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer opacity-60"><Sun size={12} className="text-blue-400" /> Ambient_Light_Source</div>
            </div>
          </div>
          
          {/* Properties Panel */}
          <div className="h-[45%] p-5 overflow-y-auto bg-[#1a1a1a]">
             <div className="flex gap-3 mb-6">
               {['R', 'M', 'P', 'S'].map(char => (
                 <div key={char} className="w-7 h-7 bg-[#242424] hover:bg-white/10 transition-colors rounded-lg border border-white/5 flex items-center justify-center font-black text-white/40 cursor-pointer">{char}</div>
               ))}
             </div>
             <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.15em]">Transform Node</span>
                    <ChevronDown size={14} className="opacity-20" />
                  </div>
                  <div className="space-y-1.5">
                     {['Location', 'Rotation', 'Scale'].map(type => (
                       <div key={type} className="flex flex-col gap-1">
                         <span className="text-[9px] opacity-20 uppercase font-black">{type}</span>
                         <div className="grid grid-cols-3 gap-1">
                            {['X', 'Y', 'Z'].map(axis => (
                              <div key={axis} className="bg-black/40 border border-white/5 p-1.5 rounded flex justify-between items-center group cursor-ew-resize hover:border-orange-500/30 transition-colors">
                                <span className="text-white/20 text-[8px] font-black">{axis}</span>
                                <span className="text-white/80">0.00</span>
                              </div>
                            ))}
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlenderMock;
