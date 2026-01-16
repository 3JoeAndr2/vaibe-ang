
import React from 'react';
import { ShoppingCart, MapPin, Tag, Filter, Search, Plus, Star } from 'lucide-react';

const Marketplace: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-black">Marketplace VaibeAngo</h2>
        <div className="flex gap-2">
          <button className="px-6 py-3 bg-[#ff2d87] rounded-2xl font-bold shadow-lg shadow-pink-500/20 flex items-center gap-2 active:scale-95 transition-transform">
             <Plus size={20} />
             <span>Anunciar Produto</span>
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {['Todos', 'Carros', 'Imóveis', 'Eletrónicos', 'Serviços', 'Moda', 'Desporto'].map((cat, i) => (
          <button key={i} className={`
            px-6 py-2 rounded-full whitespace-nowrap text-xs font-bold border transition-all
            ${i === 0 ? 'bg-[#ff2d87] border-[#ff2d87] text-white shadow-lg shadow-pink-500/20' : 'bg-white/5 border-white/10 text-zinc-500 hover:text-white'}
          `}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-[#16161b] rounded-3xl border border-white/5 overflow-hidden group cursor-pointer shadow-xl hover:translate-y-[-4px] transition-all duration-300">
             <div className="relative aspect-[4/3]">
               <img src={`https://picsum.photos/seed/product-${i}/600/450`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Product" />
               <div className="absolute top-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full flex items-center gap-1.5 border border-white/10">
                 <MapPin size={12} className="text-[#ff2d87]" />
                 <span className="text-[10px] font-bold">Talatona, Luanda</span>
               </div>
               <button className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-xl text-white border border-white/10 hover:bg-[#ff2d87] transition-colors">
                 <Plus size={16} />
               </button>
             </div>
             <div className="p-5">
               <div className="flex justify-between items-start mb-2">
                 <h4 className="text-sm font-bold truncate flex-1">Produto Premium {i}</h4>
                 <div className="flex items-center gap-1 text-yellow-500">
                   <Star size={12} fill="currentColor" />
                   <span className="text-[10px] font-bold">4.9</span>
                 </div>
               </div>
               <p className="text-[10px] text-zinc-500 mb-4">Vendedor Verificado • Intermediário Nível 5</p>
               <div className="flex items-center justify-between pt-4 border-t border-white/5">
                 <span className="text-lg font-black text-[#ff2d87]">12.500 KZ</span>
                 <button className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                   <ShoppingCart size={18} />
                 </button>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
