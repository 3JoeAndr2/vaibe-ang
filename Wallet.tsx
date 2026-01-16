
import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownLeft, Plus, QrCode, Smartphone, Wifi, Tv, Zap, Landmark, Globe } from 'lucide-react';
import { SERVICES } from '../constants';

const Wallet: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Wallet Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-[#16161b] to-black rounded-3xl p-8 border border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#ff2d87] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Saldo Total (KZ)</p>
              <h2 className="text-5xl font-black text-white mb-6">35.000,00</h2>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#ff2d87] rounded-2xl font-bold shadow-lg shadow-pink-500/20 active:scale-95 transition-transform">
                  <Plus size={20} />
                  <span>Carregar</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 active:scale-95 transition-transform">
                  <ArrowUpRight size={20} />
                  <span>Enviar</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 active:scale-95 transition-transform">
                  <QrCode size={20} />
                  <span>Pagar QR</span>
                </button>
              </div>
            </div>
            
            <div className="hidden md:block p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md">
              <CreditCard size={32} className="text-[#ff2d87] mb-4" />
              <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">ID VaibePay</p>
              <p className="text-sm font-mono text-white tracking-wider">VP-842-991-002</p>
            </div>
          </div>
        </div>

        <div className="bg-[#16161b] rounded-3xl p-6 border border-white/5 shadow-xl">
          <h3 className="text-sm font-bold mb-6 flex items-center justify-between">
            Cartões Vinculados
            <button className="text-[#ff2d87] text-[10px] font-bold uppercase">Ver Todos</button>
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl border border-white/10 flex flex-col justify-between h-32 relative group cursor-pointer hover:scale-[1.02] transition-transform">
               <div className="flex justify-between items-start">
                 <Landmark size={24} />
                 <span className="text-xs font-bold">BAI</span>
               </div>
               <p className="text-sm font-mono tracking-[0.2em]">**** **** **** 8842</p>
            </div>
            <button className="w-full py-4 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center gap-3 text-zinc-500 hover:text-white hover:border-[#ff2d87] transition-all">
              <Plus size={20} />
              <span className="text-xs font-bold">Adicionar Cartão/IBAN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-[#16161b] rounded-3xl p-6 border border-white/5 shadow-xl">
             <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
               <Smartphone size={18} className="text-[#ff2d87]" />
               Recargas & Serviços
             </h3>
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {SERVICES.slice(0, 8).map((service, i) => (
                 <button key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#ff2d87]/30 hover:bg-white/10 transition-all group">
                    <span className="text-2xl mb-2 group-hover:scale-125 transition-transform">{service.icon}</span>
                    <span className="text-xs font-bold">{service.name}</span>
                 </button>
               ))}
             </div>
          </div>

          <div className="bg-[#16161b] rounded-3xl p-6 border border-white/5 shadow-xl">
             <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
               <Globe size={18} className="text-[#8e5efc]" />
               Internacional & P2P
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                   <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                     <span className="font-black">P</span>
                   </div>
                   <div className="text-left">
                     <p className="text-xs font-bold">PayPal</p>
                     <p className="text-[10px] text-zinc-500">Transferência Instantânea</p>
                   </div>
                </button>
                <button className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                   <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold text-xl italic">
                     ₿
                   </div>
                   <div className="text-left">
                     <p className="text-xs font-bold">Binance P2P</p>
                     <p className="text-[10px] text-zinc-500">Converter para Kwanza</p>
                   </div>
                </button>
             </div>
          </div>
        </div>

        <div className="bg-[#16161b] rounded-3xl p-6 border border-white/5 shadow-xl">
          <h3 className="text-sm font-bold mb-6">Últimos Recibos</h3>
          <div className="space-y-6">
            {[
              { label: 'Unitel 5000', amount: '-5.000,00', date: 'Hoje, 14:20', type: 'debit', icon: '📱' },
              { label: 'Venda Marketplace', amount: '+12.500,00', date: 'Ontem', type: 'credit', icon: '🛒' },
              { label: 'Zap Fibra', amount: '-18.400,00', date: '22 Abr', type: 'debit', icon: '📺' },
              { label: 'Envio para @ana', amount: '-1.500,00', date: '20 Abr', type: 'debit', icon: '↔️' }
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg">{tx.icon}</div>
                  <div>
                    <p className="text-xs font-bold group-hover:text-[#ff2d87] transition-colors">{tx.label}</p>
                    <p className="text-[10px] text-zinc-500">{tx.date}</p>
                  </div>
                </div>
                <p className={`text-xs font-bold ${tx.type === 'credit' ? 'text-green-500' : 'text-zinc-300'}`}>
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-white/5 rounded-xl text-xs font-bold text-zinc-500 hover:text-white transition-colors">
            Extrato Completo (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
