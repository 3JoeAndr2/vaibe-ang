import React, { useState } from 'react';
import { 
  Home, MessageCircle, Music, Play, ShoppingBag, 
  Users, CreditCard, User, BarChart3, Settings, 
  Search, Plus, Briefcase, GraduationCap, 
  ShieldAlert, Menu, Lock, Key, Sparkles, Coins, MapPin, Star, Globe
} from 'lucide-react';
import { TabType, UserProfile, FeatureFlags } from './types';
import { COLORS, NEWS_TICKER } from './constants';
import Feed from './components/Feed';
import Wallet from './components/Wallet';
import MusicSection from './components/MusicSection';
import AdminDashboard from './components/AdminDashboard';
import ProfileView from './components/ProfileView';
import Marketplace from './components/Marketplace';
import VaibeBot from './components/VaibeBot';
import OwnerPanel from './components/OwnerPanel';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('feed');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [ownerIban, setOwnerIban] = useState('AO06 0001 0000 1234 5678 9012 3');
  const [isOwnerMode, setIsOwnerMode] = useState(false);

  const [features, setFeatures] = useState<FeatureFlags>({
    feed: true,
    messages: true,
    music: true,
    videos: true,
    market: true,
    groups: true,
    vaibepay: true,
    studios: true,
    jobs: true
  });

  const [dynamicFeatures, setDynamicFeatures] = useState<{id: string, label: string}[]>([]);

  const [user, setUser] = useState<UserProfile>({
    name: 'Joel Nuel',
    handle: '@joel_vibe',
    bio: 'Criador angolano. Música, tech e cultura 🇦🇴',
    followers: 5320,
    following: 122,
    verified: true,
    stars: 4.8,
    vaibeCoins: 1250,
    kwanzaBalance: 35000,
    level: 12,
    points: 8400
  });

  const sidebarItems = [
    { id: 'feed', icon: Home, label: 'Feed' },
    { id: 'messages', icon: MessageCircle, label: 'Mensagens' },
    { id: 'music', icon: Music, label: 'VaibMúsica' },
    { id: 'videos', icon: Play, label: 'VaibeTV' },
    { id: 'market', icon: ShoppingBag, label: 'Marketplace' },
    { id: 'groups', icon: Users, label: 'Comunidades' },
    { id: 'vaibepay', icon: CreditCard, label: 'VaibePay' },
    { id: 'studios', icon: GraduationCap, label: 'VaibeStudios' },
    { id: 'jobs', icon: Briefcase, label: 'VaibeEmpregos' },
    { id: 'profile', icon: User, label: 'Meu Perfil' },
    { id: 'admin', icon: BarChart3, label: 'Painel Pro' },
    { id: 'settings', icon: Settings, label: 'Definições' },
  ];

  const isTabLocked = (tab: string) => {
    if (tab === 'profile' || tab === 'admin' || tab === 'settings' || tab === 'owner_panel') return false;
    return !features[tab as keyof FeatureFlags];
  };

  const renderContent = () => {
    if (activeTab === 'owner_panel') {
      return (
        <OwnerPanel 
          features={features} 
          setFeatures={setFeatures} 
          ownerIban={ownerIban} 
          setOwnerIban={setOwnerIban}
          onAddIdea={(idea) => setDynamicFeatures([...dynamicFeatures, { id: `dynamic-${Date.now()}`, label: idea }])}
        />
      );
    }

    if (isTabLocked(activeTab)) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-8 bg-[#16161b] rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Lock size={200} className="text-[#ff2d87]" />
          </div>
          <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
            <Lock size={40} className="text-red-500" />
          </div>
          <h2 className="text-3xl font-black mb-4">Acesso Bloqueado</h2>
          <p className="text-zinc-500 max-w-md mb-8">
            Esta ferramenta faz parte do VaibeAngo Premium. Efetua o pagamento via IBAN abaixo:
          </p>
          
          <div className="bg-black/40 p-6 rounded-3xl border border-white/10 mb-8 w-full max-w-md">
            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">IBAN para Ativação</p>
            <p className="text-lg font-mono text-white tracking-wider break-all">{ownerIban}</p>
          </div>

          <button className="px-10 py-4 bg-gradient-to-r from-[#ff2d87] to-[#ff3b3b] rounded-full font-bold shadow-xl shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all">
            Enviar Comprovativo
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case 'feed': return <Feed />;
      case 'vaibepay': return <Wallet />;
      case 'music': return <MusicSection />;
      case 'admin': return <AdminDashboard />;
      case 'profile': return <ProfileView user={user} />;
      case 'market': return <Marketplace />;
      default: 
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-zinc-900/50 rounded-3xl border border-white/5">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Plus size={32} className="text-[#ff2d87]" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Módulo {activeTab}</h2>
            <p className="text-zinc-500 max-w-md">Em desenvolvimento para a versão 1.1.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full flex-col bg-[#0f0f12] text-[#f6f6f8]">
      {/* News Ticker */}
      <div className="h-8 bg-black/40 border-b border-white/5 flex items-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 px-4">
          {NEWS_TICKER.map((news, i) => (
            <span key={i} className="text-xs font-medium text-[#ff2d87]">{news}</span>
          ))}
          {NEWS_TICKER.map((news, i) => (
            <span key={`dup-${i}`} className="text-xs font-medium text-[#ff2d87]">{news}</span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="h-16 flex items-center px-4 gap-4 bg-black/20 border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-white/5 rounded-lg lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff2d87] via-[#8e5efc] to-[#ff3b3b] flex items-center justify-center shadow-lg shadow-pink-500/20">
            <span className="font-black text-white text-xl">V</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg leading-tight">
              Vaibe<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d87] to-[#ff3b3b]">Ango</span>
            </h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Futuro 1.1</p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-auto relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Pesquisar pessoas, serviços, músicas..."
            className="w-full h-10 pl-12 pr-4 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-[#ff2d87]/50 focus:ring-1 focus:ring-[#ff2d87]/50 transition-all"
          />
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              const key = prompt("Introduz a Chave de Acesso do Dono:");
              if (key === "vaibe123") {
                setIsOwnerMode(true);
                setActiveTab('owner_panel');
              } else {
                alert("Acesso Negado.");
              }
            }}
            className="p-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
          >
            <Key size={18} />
          </button>

          <button className="hidden sm:flex items-center gap-2 px-4 h-10 rounded-full bg-gradient-to-r from-[#ff2d87] to-[#ff3b3b] text-sm font-bold shadow-lg shadow-pink-500/20 hover:scale-105 transition-transform">
            <Plus size={18} />
            <span>Publicar</span>
          </button>

          <div 
            onClick={() => setActiveTab('profile')}
            className="w-10 h-10 rounded-full border-2 border-[#ff2d87] p-0.5 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src="https://picsum.photos/seed/joel/100/100" className="w-full h-full rounded-full object-cover" alt="User avatar" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          fixed lg:relative z-40 h-[calc(100vh-6rem)] lg:h-auto 
          w-72 bg-black/40 border-r border-white/5 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as TabType);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all group
                  ${activeTab === item.id 
                    ? 'bg-gradient-to-r from-[#ff2d87]/10 to-transparent text-[#ff2d87] border-l-4 border-[#ff2d87]' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                `}
              >
                <div className="flex items-center gap-4">
                  <item.icon size={20} className={activeTab === item.id ? 'text-[#ff2d87]' : 'group-hover:text-white'} />
                  <span>{item.label}</span>
                </div>
                {isTabLocked(item.id) && <Lock size={12} className="text-zinc-600" />}
              </button>
            ))}

            {/* Dynamic Features */}
            {dynamicFeatures.length > 0 && (
              <div className="pt-4 mt-4 border-t border-white/5">
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest px-4 mb-2">Novas Funções</p>
                {dynamicFeatures.map(feat => (
                  <button key={feat.id} className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5">
                    <Sparkles size={18} className="text-[#8e5efc]" />
                    <span>{feat.label}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-y-auto bg-black/10">
          <div className="max-w-7xl mx-auto p-4 lg:p-6">
            {renderContent()}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:flex w-80 bg-black/40 border-l border-white/5 flex-col p-6 space-y-6 overflow-y-auto">
          <section className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/10 p-4">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-full bg-[#8e5efc]/20 flex items-center justify-center">
                 <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8e5efc] to-[#ff2d87] animate-pulse"></div>
               </div>
               <div>
                 <h3 className="text-sm font-bold">VaibeBot AI</h3>
                 <p className="text-[10px] text-zinc-500">Assistente 24/7</p>
               </div>
             </div>
             <p className="text-xs text-zinc-400 mb-4 italic">"Olá Joel! Como posso ajudar na tua monetização hoje?"</p>
             <button className="w-full py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">Conversar</button>
          </section>
        </aside>
      </div>

      <VaibeBot />
    </div>
  );
};

export default App;
