
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, ArrowDown, ArrowUp, Zap, Clock, Shield, Search, Filter, Layers, LayoutGrid, Activity, MoreHorizontal } from 'lucide-react';

const DATA = Array.from({ length: 60 }).map((_, i) => ({
  time: i,
  price: 64000 + Math.random() * 1500 + Math.sin(i / 10) * 1200 + Math.cos(i / 5) * 600,
  volume: 10 + Math.random() * 50
}));

interface TradingMockProps {
  highlightId: string | null;
}

const TradingMock: React.FC<TradingMockProps> = ({ highlightId }) => {
  return (
    <div className="w-full h-full flex bg-[#020305] text-white/40 text-[11px] overflow-hidden font-sans">
      {/* Pairs Watchlist - Premium build */}
      <div id="toolbar" className={`w-72 border-r border-white/5 flex flex-col transition-all duration-700 relative z-20 ${highlightId === 'toolbar' ? 'ring-2 ring-indigo-500 ring-inset bg-indigo-500/5 shadow-[0_0_40px_rgba(99,102,241,0.1)]' : ''}`}>
        <div className="p-6 flex flex-col gap-4 border-b border-white/5 bg-black/20">
          <div className="flex items-center justify-between">
            <span className="font-black text-xs text-white uppercase tracking-[0.2em]">Market Flow</span>
            <Search size={16} className="opacity-20 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest text-indigo-400 border border-indigo-500/20">Assets</div>
            <div className="flex-1 bg-white/5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors cursor-pointer text-center">Indexes</div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {[
            { p: 'BTC / USDT', v: '65,142.20', c: '+3.82%', active: true },
            { p: 'ETH / USDT', v: '3,214.90', c: '-0.41%', active: false },
            { p: 'SOL / USDT', v: '158.42', c: '+14.2%', active: false },
            { p: 'LINK / USDT', v: '19.11', c: '+2.14%', active: false },
            { p: 'AVAX / USDT', v: '38.40', c: '-1.12%', active: false },
            { p: 'NEAR / USDT', v: '7.82', c: '+8.91%', active: false },
          ].map((pair, i) => (
            <div key={i} className={`p-6 flex justify-between items-center border-b border-white/5 hover:bg-white/[0.03] cursor-pointer transition-all ${pair.active ? 'bg-indigo-500/10 border-l-2 border-indigo-500' : ''}`}>
               <div>
                 <div className={`font-bold tracking-tight mb-1 ${pair.active ? 'text-white' : 'text-white/60'}`}>{pair.p}</div>
                 <div className="text-[9px] font-black opacity-30 uppercase tracking-widest">Global Vol: 2.14B</div>
               </div>
               <div className="text-right">
                 <div className={`font-mono font-bold ${pair.active ? 'text-white' : 'text-white/80'}`}>{pair.v}</div>
                 <div className={`text-[10px] font-black ${pair.c.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{pair.c}</div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Intelligence Core */}
      <div className="flex-1 flex flex-col bg-[#05070a]">
        {/* Terminal Header Stats */}
        <div className="h-16 border-b border-white/5 flex items-center px-10 gap-12 overflow-x-auto bg-black/40 backdrop-blur-xl shrink-0 no-scrollbar">
          <div className="shrink-0 group">
            <span className="text-[9px] font-black opacity-20 block uppercase tracking-[0.2em] mb-1 group-hover:text-indigo-400 transition-colors">Spot Price</span>
            <span className="text-white font-black text-base tracking-tighter">65,142.20</span>
          </div>
          <div className="h-6 w-px bg-white/5" />
          <div className="shrink-0">
            <span className="text-[9px] font-black opacity-20 block uppercase tracking-[0.2em] mb-1">Index Divergence</span>
            <span className="text-green-500 font-black">+2,421.20</span>
          </div>
          <div className="shrink-0">
            <span className="text-[9px] font-black opacity-20 block uppercase tracking-[0.2em] mb-1">24h Peak</span>
            <span className="text-white font-bold opacity-80">66,200.00</span>
          </div>
          <div className="shrink-0">
            <span className="text-[9px] font-black opacity-20 block uppercase tracking-[0.2em] mb-1">Neural Sentiment</span>
            <div className="flex items-center gap-2">
               <div className="w-12 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[85%]"></div>
               </div>
               <span className="text-indigo-400 font-black">Bullish</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-6">
             <Activity size={18} className="text-indigo-500 animate-pulse" />
             <MoreHorizontal size={18} className="opacity-20 hover:opacity-100 cursor-pointer" />
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Main Visual Data Node */}
          <div id="canvas" className={`flex-1 p-8 flex flex-col gap-8 transition-all duration-700 overflow-hidden relative ${highlightId === 'canvas' ? 'bg-indigo-500/[0.03]' : ''}`}>
             <div className="flex items-center justify-between relative z-10">
               <div className="flex gap-2">
                  {['1M', '5M', '15M', '1H', '4H', '1D'].map(tf => (
                    <div key={tf} className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all cursor-pointer ${tf === '4H' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}>{tf}</div>
                  ))}
               </div>
               <div className="flex gap-6 items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.05]">
                    <Layers size={14} className="text-indigo-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Indicators</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.05]">
                    <LayoutGrid size={14} className="text-indigo-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Layout</span>
                  </div>
               </div>
             </div>
             
             <div className="flex-1 relative">
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                  <TrendingUp size={300} className="text-white" />
               </div>
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={DATA}>
                   <defs>
                     <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                   <XAxis dataKey="time" hide />
                   <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                   <Tooltip 
                     cursor={{ stroke: 'rgba(99,102,241,0.2)', strokeWidth: 2 }}
                     contentStyle={{ backgroundColor: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', color: '#fff' }}
                     itemStyle={{ color: '#818cf8', fontWeight: '900', textTransform: 'uppercase', fontSize: '10px' }}
                   />
                   <Area type="monotone" dataKey="price" stroke="#6366f1" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={3} animationDuration={2000} />
                 </AreaChart>
               </ResponsiveContainer>
             </div>

             <div className="grid grid-cols-3 gap-6 relative z-10">
                <div className="glass-panel p-5 rounded-2xl border-white/5">
                   <span className="text-[9px] font-black opacity-20 block uppercase mb-1 tracking-widest">RSI (14)</span>
                   <span className="text-white font-black text-lg">68.2 <span className="text-[10px] text-green-500">+1.2</span></span>
                </div>
                <div className="glass-panel p-5 rounded-2xl border-white/5">
                   <span className="text-[9px] font-black opacity-20 block uppercase mb-1 tracking-widest">ATR</span>
                   <span className="text-white font-black text-lg">14.82 <span className="text-[10px] text-white/20">LOW</span></span>
                </div>
                <div className="glass-panel p-5 rounded-2xl border-white/5">
                   <span className="text-[9px] font-black opacity-20 block uppercase mb-1 tracking-widest">VOL (24H)</span>
                   <span className="text-white font-black text-lg">2.14B <span className="text-[10px] text-indigo-400">SYNC</span></span>
                </div>
             </div>
          </div>

          {/* Quant Order Book / Execution Stack */}
          <div id="layers" className={`w-80 border-l border-white/5 flex flex-col p-8 transition-all duration-700 relative z-20 ${highlightId === 'layers' ? 'bg-indigo-500/5 ring-1 ring-indigo-500 ring-inset' : 'bg-black/20'}`}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-black text-xs uppercase tracking-[0.2em]">Order Book</span>
              <Filter size={14} className="opacity-20 hover:opacity-100 cursor-pointer" />
            </div>
            
            <div className="flex-1 flex flex-col min-h-0">
               {/* SELL / ASKS */}
               <div className="space-y-1 mb-4 flex-1 overflow-hidden opacity-80">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const depth = 20 + Math.random() * 80;
                    return (
                      <div key={i} className="flex justify-between items-center relative h-5 group">
                         <div className="absolute inset-y-0 right-0 bg-red-500/10 transition-all duration-500 group-hover:bg-red-500/20" style={{ width: `${depth}%` }}></div>
                         <span className="text-red-400/80 font-mono font-bold z-10">{65180 + i * 8}</span>
                         <span className="z-10 font-mono text-[10px] font-black opacity-40">{(Math.random() * 0.5).toFixed(4)}</span>
                      </div>
                    );
                  })}
               </div>
               
               <div className="py-6 flex flex-col items-center gap-1 border-y border-white/5 my-4 bg-white/[0.01]">
                  <span className="text-white font-black text-2xl tracking-tighter">65,142.20</span>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                     <span className="text-[9px] font-black uppercase tracking-widest opacity-20">Real-time Feed</span>
                  </div>
               </div>
               
               {/* BUY / BIDS */}
               <div className="space-y-1 mt-4 flex-1 overflow-hidden opacity-80">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const depth = 20 + Math.random() * 80;
                    return (
                      <div key={i} className="flex justify-between items-center relative h-5 group">
                         <div className="absolute inset-y-0 right-0 bg-green-500/10 transition-all duration-500 group-hover:bg-green-500/20" style={{ width: `${depth}%` }}></div>
                         <span className="text-green-400/80 font-mono font-bold z-10">{65130 - i * 8}</span>
                         <span className="z-10 font-mono text-[10px] font-black opacity-40">{(Math.random() * 0.8).toFixed(4)}</span>
                      </div>
                    );
                  })}
               </div>
            </div>

            {/* Neural Execution Panel */}
            <div className="mt-10 flex flex-col gap-4">
               <div className="flex gap-4">
                 <button className="flex-1 bg-green-600/10 border border-green-500/20 text-green-500 py-4 rounded-2xl font-black text-[11px] tracking-[0.2em] hover:bg-green-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-2">
                   <ArrowUp size={14} /> BUY
                 </button>
                 <button className="flex-1 bg-red-600/10 border border-red-500/20 text-red-500 py-4 rounded-2xl font-black text-[11px] tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-2">
                   <ArrowDown size={14} /> SELL
                 </button>
               </div>
               <button className="w-full bg-indigo-600 py-5 rounded-2xl text-white font-black text-[12px] tracking-[0.3em] shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 group">
                  <Zap size={18} fill="currentColor" className="group-hover:scale-125 transition-transform" /> NEURAL EXECUTE
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingMock;
