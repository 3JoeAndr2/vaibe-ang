
import React, { useState } from 'react';
import { Bot, Send, X, Minimize2, Sparkles } from 'lucide-react';
// Import GoogleGenAI from the correct package
import { GoogleGenAI } from "@google/genai";

const VaibeBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: 'Olá Joel! Eu sou o VaibeBot. Como posso ajudar com a tua conta VaibeAngo 1.1 hoje?' }
  ]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;
    
    const userMsg = message;
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setMessage('');
    setIsLoading(true);
    
    try {
      // Initialize the API client with the API key from environment variable
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Use the gemini-3-flash-preview model for efficient text interaction
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "Tu és o VaibeBot AI, o assistente inteligente da rede social VaibeAngo 1.1 em Angola. Tua personalidade é prestativa, conhecedora da realidade angolana (música, serviços como Unitel/BFA, e economia local) e amigável. Ajuda os utilizadores a navegarem no Marketplace, VaibePay e VaibMúsica. Responde em Português de Angola de forma concisa.",
        }
      });

      // Extract generated text from response property (not a method)
      const botText = response.text || "Desculpa, não consegui processar a tua resposta agora.";
      setChat(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setChat(prev => [...prev, { role: 'bot', text: 'Ocorreu um erro ao comunicar com a inteligência artificial. Por favor, tenta novamente.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff2d87] to-[#8e5efc] text-white flex items-center justify-center shadow-2xl shadow-pink-500/40 hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <Bot size={28} className="group-hover:animate-bounce" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0f0f12]"></span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-[#16161b] rounded-3xl border border-white/10 shadow-2xl z-[100] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="p-4 bg-gradient-to-r from-[#ff2d87] to-[#8e5efc] flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <Bot size={20} />
          <div>
            <h3 className="text-sm font-bold">VaibeBot AI</h3>
            <p className="text-[10px] text-white/70">Online agora</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg"><Minimize2 size={16} /></button>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg"><X size={16} /></button>
        </div>
      </div>

      <div className="flex-1 h-96 overflow-y-auto p-4 space-y-4">
        {chat.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-[#ff2d87] text-white rounded-tr-none' 
                : 'bg-white/5 border border-white/5 text-zinc-300 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/5 text-zinc-500 p-3 rounded-2xl rounded-tl-none text-[10px] animate-pulse">
              VaibeBot está a pensar...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-white/5 bg-black/20">
        <div className="flex gap-2">
          <input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
            placeholder="Perguntar sobre VaibePay..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#ff2d87] disabled:opacity-50"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !message.trim()}
            className="p-2 bg-[#ff2d87] rounded-xl hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
        <div className="mt-2 flex items-center gap-1 justify-center">
          <Sparkles size={10} className="text-[#ff2d87]" />
          <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Powered by Gemini AI</span>
        </div>
      </div>
    </div>
  );
};

export default VaibeBot;
