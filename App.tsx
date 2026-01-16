// App.tsx
import React from "react";

// --- Componentes internos ---
// Feed simulado
const Feed: React.FC = () => {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "20px" }}>
      <h2>Feed</h2>
      <p>Aqui aparecerão posts, músicas e vídeos dos usuários.</p>
    </div>
  );
};

// Sidebar simulado
const Sidebar: React.FC = () => {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", width: "200px" }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Início</li>
        <li>Perfil</li>
        <li>Mensagens</li>
        <li>Configurações</li>
      </ul>
    </div>
  );
};

// Função de exemplo para lidar com cliques
const handleClick = (botao: string) => {
  console.log(`${botao} clicado`);
};

// --- Componente principal App ---
const App: React.FC = () => {
  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside>
        <Sidebar />
      </aside>

      {/* Conteúdo principal */}
      <main style={{ flex: 1, padding: "20px" }}>
        
        {/* Header */}
        <header style={{ marginBottom: "20px" }}>
          <h1>Vaibe Ango</h1>
          <p>Bem-vindo ao app oficial!</p>
        </header>

        {/* Botões principais */}
        <div className="buttons-section" style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button
            style={{ padding: "10px 20px", backgroundColor: "#8A2BE2", color: "#fff", border: "none", borderRadius: "5px" }}
            onClick={() => handleClick("Botão 1")}
          >
            Botão 1
          </button>

          <button
            style={{ padding: "10px 20px", backgroundColor: "#FF1493", color: "#fff", border: "none", borderRadius: "5px" }}
            onClick={() => handleClick("Botão 2")}
          >
            Botão 2
          </button>

          <button
            style={{ padding: "10px 20px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "5px" }}
            onClick={() => handleClick("Botão 3")}
          >
            Botão 3
          </button>
        </div>

        {/* Feed */}
        <Feed />

        {/* Footer */}
        <footer style={{ borderTop: "1px solid #ccc", paddingTop: "10px", marginTop: "20px" }}>
          <p>© 2026 Vaibe Ango. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
