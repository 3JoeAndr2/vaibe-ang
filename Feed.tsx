
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Star, MoreHorizontal, Image as ImageIcon, Video, Music, MapPin, Smile, Plus, Link, FileText } from 'lucide-react';
import { Post } from '../types';

const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    user: 'Marta Viana',
    avatar: 'https://picsum.photos/seed/marta/100/100',
    content: 'Acabei de publicar a minha nova música no VaibMúsica! 🎵🇦🇴 Deem uma olhada no perfil VIP.',
    type: 'text',
    likes: 1240,
    comments: 89,
    shares: 45,
    timestamp: '2h ago',
    verified: true,
    location: 'Luanda, Angola'
  },
  {
    id: '2',
    user: 'Tech Angola',
    avatar: 'https://picsum.photos/seed/tech/100/100',
    content: 'O futuro dos pagamentos em Angola passa pelo VaibePay. Integração total com BFA e BAI confirmada para o próximo mês! 💳🚀',
    media: 'https://picsum.photos/seed/payments/800/450',
    type: 'image',
    likes: 3450,
    comments: 210,
    shares: 560,
    timestamp: '5h ago',
    verified: true
  }
];

const Feed: React.FC = () => {
  const [posts] = useState<Post[]>(INITIAL_POSTS);
  const [showMediaOptions, setShowMediaOptions] = useState<string | null>(null);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Create Post Card */}
      <div className="bg-[#16161b] rounded-3xl border border-white/5 p-4 sm:p-6 shadow-xl relative">
        <div className="flex gap-4 mb-4">
          <img src="https://picsum.photos/seed/joel/100/100" className="w-12 h-12 rounded-2xl object-cover" alt="My avatar" />
          <textarea 
            placeholder="O que estás a pensar? #VaibeAngo"
            className="flex-1 bg-transparent border-none focus:ring-0 text-lg resize-none placeholder:text-zinc-600 min-h-[80px]"
          />
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-1 sm:gap-2 relative">
            <button 
              onClick={() => setShowMediaOptions(showMediaOptions === 'image' ? null : 'image')}
              className="p-2 hover:bg-white/5 rounded-xl text-zinc-400 hover:text-[#ff2d87] transition-all flex items-center gap-2"
            >
              <ImageIcon size={20} />
              <span className="hidden sm:inline text-xs font-bold">Foto</span>
            </button>
            <button 
              onClick={() => setShowMediaOptions(showMediaOptions === 'video' ? null : 'video')}
              className="p-2 hover:bg-white/5 rounded-xl text-zinc-400 hover:text-blue-500 transition-all flex items-center gap-2"
            >
              <Video size={20} />
              <span className="hidden sm:inline text-xs font-bold">Vídeo</span>
            </button>
            <button 
              onClick={() => setShowMediaOptions(showMediaOptions === 'music' ? null : 'music')}
              className="p-2 hover:bg-white/5 rounded-xl text-zinc-400 hover:text-[#8e5efc] transition-all flex items-center gap-2"
            >
              <Music size={20} />
              <span className="hidden sm:inline text-xs font-bold">Música</span>
            </button>

            {showMediaOptions && (
              <div className="absolute top-12 left-0 z-20 bg-black border border-white/10 rounded-2xl p-2 flex flex-col gap-1 shadow-2xl animate-in zoom-in-95 duration-200">
                <button className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-xl text-xs font-bold">
                  <FileText size={16} className="text-[#ff2d87]" />
                  Enviar Arquivo
                </button>
                <button className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-xl text-xs font-bold">
                  <Link size={16} className="text-blue-500" />
                  Inserir Link
                </button>
              </div>
            )}
          </div>
          
          <button className="px-8 py-2.5 bg-gradient-to-r from-[#ff2d87] to-[#ff3b3b] rounded-full text-sm font-bold shadow-lg shadow-pink-500/20 active:scale-95 transition-transform">
            Publicar
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-[#16161b] rounded-3xl border border-white/5 overflow-hidden shadow-xl">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={post.avatar} className="w-12 h-12 rounded-2xl object-cover" alt={post.user} />
                  <div>
                    <h3 className="font-bold flex items-center gap-1">{post.user}</h3>
                    <p className="text-[10px] text-zinc-500">{post.timestamp} • {post.location || 'Global'}</p>
                  </div>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4">{post.content}</p>
              {post.media && (
                <div className="rounded-2xl overflow-hidden border border-white/5 mb-4">
                  <img src={post.media} className="w-full h-auto" alt="Post content" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Feed;
