
import React, { useState } from 'react';
import { 
  ShieldCheck, Layout, Users, DollarSign, Key, 
  ToggleLeft, ToggleRight, Save, Trash2, Plus, 
  Lightbulb, Activity, Star, Award, TrendingUp,
  CreditCard, Globe, Zap, Lock, Sparkles
} from 'lucide-react';
import { FeatureFlags, UserProfile } from '../types';

interface Props {
  features: FeatureFlags;
  setFeatures: React.Dispatch<React.SetStateAction<FeatureFlags>>;
  ownerIban: string;
  setOwnerIban: (iban: string) => void;
  onAddIdea: (idea: string) => void;
}

const OwnerPanel: React.FC<Props> = ({ features, setFeatures, ownerIban, setOwnerIban, onAddIdea }) => {
  const [newIdea, setNewIdea] = useState('');
  const [tempIban, setTempIban] = useState(ownerIban);

  // Mock User Analytics
  const topUsers: UserProfile[] = [
    { name: 'Antonio Pedro', handle: '@antonio_king', followers: 15000, following: 200, bio: '', verified: true, stars: 5, vaibeCoins: 5000, kwanzaBalance: 1200000, level: 25, points: 50000, totalSpent: 850000 },
    { name: 'Maria Jose', handle: '@mary_vaibe', followers: 8000, following: 150, bio: '', verified: true, stars: 4.8, vaibeCoins: 2000, kwanzaBalance: 450000, level: 18, points: 20000, totalSpent: 620000 },
    { name: 'Carlos Luanda', handle: '@carlos_88', followers: 1200, following: 500, bio: '', verified: false, stars: 4.5, vaibeCoins: 500, kwanzaBalance: 50000, level: 8, points: 5000, totalSpent: 310000 },
  ];

  const toggleFeature = (key: keyof FeatureFlags) => {
    setFeatures({ ...features, [key]: !features[key] });
  };

  const handleAddIdea = () => {
    if (newIdea.trim()) {
      onAddIdea(newIdea);
      setNewIdea('');
      alert("Ideia processada pela IA e adicionada como funcionalidade pendente!");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 bg-gradient-to-r from-zinc-900 to-black rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <ShieldCheck size={120} className="text-yellow-500" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-1">Painel Master do Dono</h2>
          <p className="text-zinc-500 text-sm">Controle total sobre o ecossistema VaibeAngo.</p>
        </div>
        <div className="bg-yellow-500/10 px-4 py-2 rounded-2xl border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
           <Zap size={14} fill="currentColor" />
           Acesso Root Ativo
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feature Toggles */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#16161b] p-8 rounded-[40px] border border-white/5 shadow-xl">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <Layout className="text-[#ff2d87]" />
              Gestão de Ferramentas (Ativar/Desativar)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(Object.keys(features) as Array<keyof FeatureFlags>).map((key) => (
                <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#ff2d87]/30 transition-all">
                   <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${features[key] ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                       {features[key] ? <Zap size={20} /> : <Lock size={20} />}
                     </div>
                     <span className="text-sm font-bold capitalize">{key}</span>
                   </div>
                   <button onClick={() => toggleFeature(key)}>
                     {features[key] ? (
                       <ToggleRight size={32} className="text-green-500" />
                     ) : (
                       <ToggleLeft size={32} className="text-zinc-600" />
                     )}
                   </button>
                </div>
              ))}
            </div>
          </div>

          {/* User Ranking/Analytics */}
          <div className="bg-[#16161b] p-8 rounded-[40px] border border-white/5 shadow-xl">
             <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
               <TrendingUp className="text-blue-500" />
               Utilizadores que Mais Rendem (TOP 10)
             </h3>
             <div className="space-y-4">
               {topUsers.map((u, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 group hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-4">
                       <span className={`text-sm font-black w-6 ${i === 0 ? 'text-yellow-500' : 'text-zinc-500'}`}>#{i+1}</span>
                       <img src={`https://picsum.photos/seed/user-${i}/100/100`} className="w-10 h-10 rounded-xl object-cover" alt="User" />
                       <div>
                         <p className="text-sm font-bold">{u.name}</p>
                         <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{u.handle}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-black text-green-500">{u.totalSpent?.toLocaleString()} KZ</p>
                       <p className="text-[10px] text-zinc-500">Total Investido</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-6">
          {/* IBAN Management */}
          <div className="bg-[#16161b] p-6 rounded-[40px] border border-white/5 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
               <CreditCard size={64} className="text-[#ff2d87]" />
            </div>
            <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
              <CreditCard size={18} className="text-[#ff2d87]" />
              Configuração de Pagamentos
            </h3>
            <div className="space-y-4">
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">O Teu IBAN (Dono)</label>
              <input 
                value={tempIban}
                onChange={(e) => setTempIban(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-mono focus:outline-none focus:border-[#ff2d87]"
              />
              <button 
                onClick={() => {setOwnerIban(tempIban); alert("IBAN atualizado para todos os bloqueios!");}}
                className="w-full py-3 bg-[#ff2d87] rounded-xl font-bold text-xs shadow-lg shadow-pink-500/20 active:scale-95 transition-transform"
              >
                Atualizar IBAN Master
              </button>
            </div>
          </div>

          {/* New Idea Box */}
          <div className="bg-gradient-to-br from-[#8e5efc]/20 to-[#ff2d87]/20 p-6 rounded-[40px] border border-white/10 shadow-xl">
             <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
               <Lightbulb size={18} className="text-yellow-500" />
               Nova Ideia de Função
             </h3>
             <textarea 
               value={newIdea}
               onChange={(e) => setNewIdea(e.target.value)}
               placeholder="Escreve aqui uma nova ideia (ex: Sistema de Leilões)..."
               className="w-full h-32 bg-black/40 border border-white/10 rounded-2xl p-4 text-xs resize-none focus:outline-none focus:border-[#8e5efc] placeholder:text-zinc-600 mb-4"
             />
             <button 
               onClick={handleAddIdea}
               className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
             >
                {/* Added Sparkles icon from lucide-react */}
                <Sparkles size={16} fill="currentColor" />
                ATIVAR FUNCIONALIDADE
             </button>
          </div>

          {/* Overall Stats */}
          <div className="bg-[#16161b] p-6 rounded-[40px] border border-white/5 shadow-xl">
             <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
               <Activity size={18} className="text-blue-500" />
               Saúde do App
             </h3>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl text-center">
                   <p className="text-xl font-black">2.450</p>
                   <p className="text-[10px] text-zinc-500 font-bold uppercase">Total Users</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl text-center">
                   <p className="text-xl font-black">1.2k</p>
                   <p className="text-[10px] text-zinc-500 font-bold uppercase">Activos</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerPanel;
