
import React, { useState } from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Search, MoreVertical, Plus, Mic2, Star, Link, FileText, ChevronDown } from 'lucide-react';

const MusicSection: React.FC = () => {
  const [showUploadMenu, setShowUploadMenu] = useState(false);

  return (
    <div className="space-y-8">
      {/* Featured Artist Banner */}
      <div className="relative h-64 rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">
        <img src="https://picsum.photos/seed/artist/1200/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Featured Artist" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 p-10 flex flex-col justify-center max-w-lg">
           <div className="flex items-center gap-2 mb-2">
             <Star size={16} className="text-yellow-500 fill-yellow-500" />
             <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Artista do Mês</span>
           </div>
           <h2 className="text-4xl font-black mb-2">Anselmo Ralph</h2>
           <p className="text-zinc-400 text-sm mb-6">Exclusivo: Ouve o novo álbum "Futuro" primeiro no VaibMúsica.</p>
           <div className="flex gap-4">
             <button className="px-8 py-3 bg-[#ff2d87] rounded-full font-bold shadow-lg shadow-pink-500/20 flex items-center gap-2 active:scale-95 transition-transform">
                <Play size={20} fill="white" />
                <span>Ouvir Agora</span>
             </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Music Area */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
              Top Tendências Angola
              <button className="text-xs text-[#ff2d87] font-bold">Ver Tudo</button>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-3xl overflow-hidden mb-3 border border-white/5 shadow-lg">
                    <img src={`https://picsum.photos/seed/music-${i}/400/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Album" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#ff2d87] flex items-center justify-center shadow-xl">
                        <Play size={24} fill="white" className="ml-1" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold truncate">Hit Luanda {i}</h4>
                  <p className="text-xs text-zinc-500">Marta Viana</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6">Playlist Recomendada</h3>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-zinc-600 w-4">{i}</span>
                    <img src={`https://picsum.photos/seed/track-${i}/100/100`} className="w-10 h-10 rounded-lg object-cover" alt="Cover" />
                    <div>
                      <p className="text-sm font-bold">Sem Ti Faz Sentido {i}</p>
                      <p className="text-[10px] text-zinc-500">C4 Pedro</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-zinc-500">03:45</span>
                    <button className="p-2 text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"><Plus size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Artist Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#16161b] rounded-3xl p-6 border border-white/5 shadow-xl relative">
            <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
              <Mic2 size={18} className="text-[#ff2d87]" />
              Painel do Artista
            </h3>
            <div className="bg-gradient-to-br from-[#ff2d87]/10 to-transparent p-4 rounded-2xl border border-[#ff2d87]/20 mb-6 text-center">
              <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Ganhos do Mês</p>
              <h4 className="text-2xl font-black text-white">450.000 KZ</h4>
            </div>
            <div className="space-y-3 relative">
              <div className="relative">
                <button 
                  onClick={() => setShowUploadMenu(!showUploadMenu)}
                  className="w-full py-4 bg-[#ff2d87] rounded-xl font-bold text-xs shadow-lg shadow-pink-500/10 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Submeter Música
                  <ChevronDown size={14} className={showUploadMenu ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                {showUploadMenu && (
                  <div className="absolute top-14 left-0 w-full z-10 bg-black border border-white/10 rounded-2xl p-2 flex flex-col gap-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
                    <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-xs font-bold text-left">
                       <FileText size={18} className="text-[#ff2d87]" />
                       Carregar Arquivo (MP3/WAV)
                    </button>
                    <button className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-xs font-bold text-left">
                       <Link size={18} className="text-blue-500" />
                       Colocar Link Externo
                    </button>
                  </div>
                )}
              </div>
              <button className="w-full py-3 bg-white/5 rounded-xl font-bold text-xs text-zinc-400 hover:text-white transition-colors">
                Ver Estatísticas Detalhadas
              </button>
              <button className="w-full py-3 bg-white/5 rounded-xl font-bold text-xs text-zinc-400 hover:text-white transition-colors">
                Gerar Links (1000 KZ)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
