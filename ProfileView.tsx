
import React from 'react';
import { Settings, Share, Edit3, Grid, Video, Music as MusicIcon, Star, MapPin, Briefcase } from 'lucide-react';
import { UserProfile } from '../types';

interface Props {
  user: UserProfile;
}

const ProfileView: React.FC<Props> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Cover and Profile Header */}
      <div className="relative">
        <div className="h-48 sm:h-64 rounded-[40px] bg-gradient-to-r from-[#ff2d87] via-[#8e5efc] to-[#ff3b3b] shadow-2xl overflow-hidden relative">
           <img src="https://picsum.photos/seed/cover/1200/400" className="w-full h-full object-cover opacity-50" alt="Cover" />
           <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="px-6 -mt-16 sm:-mt-20 relative z-10">
          <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[40px] border-8 border-[#0f0f12] p-1 bg-gradient-to-br from-[#ff2d87] to-[#8e5efc] shadow-2xl">
                <img src="https://picsum.photos/seed/joel/200/200" className="w-full h-full rounded-[32px] object-cover" alt="Profile" />
              </div>
              <div className="mb-2 sm:mb-4 text-center sm:text-left">
                <h1 className="text-3xl font-black flex items-center justify-center sm:justify-start gap-2">
                  {user.name}
                  {user.verified && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#0f0f12]">
                      <Star size={12} fill="white" className="text-white" />
                    </div>
                  )}
                </h1>
                <p className="text-zinc-500 font-bold">{user.handle}</p>
                <div className="flex items-center gap-4 mt-2 justify-center sm:justify-start">
                   <div className="flex items-center gap-1 text-[10px] text-[#ff2d87] bg-[#ff2d87]/10 px-2 py-1 rounded-full font-bold">
                      <Star size={12} fill="currentColor" />
                      <span>{user.stars} Pontuação</span>
                   </div>
                   <div className="flex items-center gap-1 text-[10px] text-[#8e5efc] bg-[#8e5efc]/10 px-2 py-1 rounded-full font-bold">
                      <Star size={12} fill="currentColor" />
                      <span>LVL {user.level}</span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                 <Edit3 size={18} />
                 <span>Editar Perfil</span>
              </button>
              <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10">
                 <Share size={18} />
              </button>
              <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10">
                 <Settings size={18} />
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
               <div className="bg-[#16161b] p-6 rounded-3xl border border-white/5 shadow-xl">
                 <h3 className="text-sm font-bold mb-4">Sobre</h3>
                 <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                   {user.bio}
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                      <MapPin size={16} className="text-[#ff2d87]" />
                      <span>Luanda, Angola</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                      <Briefcase size={16} className="text-[#8e5efc]" />
                      <span>Digital Creator / Full-stack Engineer</span>
                    </div>
                 </div>
               </div>

               <div className="bg-[#16161b] p-6 rounded-3xl border border-white/5 shadow-xl">
                 <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black">{user.followers.toLocaleString()}</p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Seguidores</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black">{user.following.toLocaleString()}</p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Seguindo</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
               <div className="flex gap-1 bg-[#16161b] p-1.5 rounded-2xl border border-white/5">
                 {[
                   { id: 'posts', icon: Grid, label: 'Posts' },
                   { id: 'reels', icon: Video, label: 'VaibeTV' },
                   { id: 'music', icon: MusicIcon, label: 'Músicas' }
                 ].map((tab) => (
                   <button key={tab.id} className={`
                     flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all
                     ${tab.id === 'posts' ? 'bg-[#ff2d87] text-white shadow-lg' : 'text-zinc-500 hover:text-white'}
                   `}>
                     <tab.icon size={16} />
                     <span className="hidden sm:inline">{tab.label}</span>
                   </button>
                 ))}
               </div>

               <div className="grid grid-cols-3 gap-2">
                 {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                   <div key={i} className="aspect-square rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden group cursor-pointer">
                      <img src={`https://picsum.photos/seed/profile-post-${i}/400/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Post" />
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
