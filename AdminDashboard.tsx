
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, TrendingUp, DollarSign, Eye, Star, ShieldCheck } from 'lucide-react';

const DATA = [
  { name: 'Seg', users: 400, revenue: 2400 },
  { name: 'Ter', users: 300, revenue: 1398 },
  { name: 'Qua', users: 200, revenue: 9800 },
  { name: 'Qui', users: 278, revenue: 3908 },
  { name: 'Sex', users: 189, revenue: 4800 },
  { name: 'Sáb', users: 239, revenue: 3800 },
  { name: 'Dom', users: 349, revenue: 4300 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black">Painel Pro & Monetização</h2>
          <p className="text-zinc-500 text-sm">Gerencie o seu progresso e ganhos no VaibeAngo Futuro.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">Exportar Relatório</button>
          <button className="px-4 py-2 bg-[#ff2d87] rounded-xl text-xs font-bold shadow-lg shadow-pink-500/20 active:scale-95 transition-transform">Ver Regras</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Utilizadores', val: '1.280', delta: '+12%', icon: Users, color: 'text-[#ff2d87]' },
          { label: 'Criadores VIP', val: '236', delta: '+5%', icon: Star, color: 'text-yellow-500' },
          { label: 'Receita Total', val: '780.000 KZ', delta: '+28%', icon: DollarSign, color: 'text-green-500' },
          { label: 'Alcance', val: '45.2k', delta: '+18%', icon: Eye, color: 'text-blue-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-[#16161b] p-6 rounded-3xl border border-white/5 shadow-xl group hover:border-[#ff2d87]/20 transition-all">
            <div className="flex justify-between items-start mb-4">
               <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                  <stat.icon size={24} />
               </div>
               <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">{stat.delta}</span>
            </div>
            <p className="text-xs font-bold text-zinc-500 uppercase mb-1">{stat.label}</p>
            <h4 className="text-2xl font-black">{stat.val}</h4>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Growth Chart */}
        <div className="bg-[#16161b] p-6 rounded-3xl border border-white/5 shadow-xl">
           <div className="flex items-center justify-between mb-8">
             <h3 className="text-sm font-bold flex items-center gap-2">
               <TrendingUp size={18} className="text-[#ff2d87]" />
               Crescimento Semanal
             </h3>
             <select className="bg-white/5 border border-white/10 text-[10px] font-bold rounded-lg px-2 py-1 focus:outline-none">
               <option>Últimos 7 dias</option>
               <option>Este mês</option>
             </select>
           </div>
           <div className="h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff2d87" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ff2d87" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#555" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#16161b', border: '1px solid #333', borderRadius: '12px', fontSize: '10px' }}
                    itemStyle={{ color: '#ff2d87' }}
                  />
                  <Area type="monotone" dataKey="users" stroke="#ff2d87" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Reputation/Levels */}
        <div className="bg-[#16161b] p-6 rounded-3xl border border-white/5 shadow-xl">
           <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
             <ShieldCheck size={18} className="text-green-500" />
             Reputação do Intermediário
           </h3>
           <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                 <div className="flex justify-between items-center mb-2">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center font-black">12</div>
                     <div>
                       <p className="text-xs font-bold">Nível Expert em Vendas</p>
                       <p className="text-[10px] text-zinc-500">920/1000 XP para Pró</p>
                     </div>
                   </div>
                   <Star size={20} className="text-yellow-500 fill-yellow-500" />
                 </div>
                 <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[92%]"></div>
                 </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-zinc-500 uppercase">Validação de Comprovativos</p>
                {[
                  { user: 'Venda de Toyota Land Cruiser', val: 'Pendente', color: 'text-yellow-500' },
                  { user: 'Casa T3 Talatona', val: 'Validado', color: 'text-green-500' },
                  { user: 'Iphone 15 Pro Max', val: 'Validado', color: 'text-green-500' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-xs font-bold p-3 bg-white/5 rounded-xl border border-white/5">
                    <span>{item.user}</span>
                    <span className={item.color}>{item.val}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
