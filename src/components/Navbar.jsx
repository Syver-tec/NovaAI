import { useState } from "react";

// Ícones do menu mobile
import { Menu, X } from "lucide-react";

function Navbar() {

  /*
    Estado que controla se o menu mobile está aberto ou fechado.

    false = fechado
    true = aberto
  */
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    /*
      Header fixo no topo da tela.

      fixed      = deixa fixo
      top-0      = encostado no topo
      left-0     = encostado na esquerda
      w-full     = largura total
      z-50       = prioridade alta sobre outros elementos
    */
    <header className="fixed top-0 left-0 w-full z-50">

      {/*
        Container principal da navbar.

        max-w-7xl = largura máxima
        mx-auto   = centraliza horizontalmente
        px-6      = padding lateral
        py-4      = padding vertical
      */}
      <nav className="max-w-7xl mx-auto px-6 py-4">

        {/*
          Caixa visual da navbar.

          bg-white/80    = fundo branco com transparência
          backdrop-blur  = efeito vidro/glassmorphism
          border         = borda
          rounded-2xl    = cantos arredondados
          shadow-sm      = sombra leve
        */}
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">

          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-3">

            {/*
              Ícone/logo

              w-10 h-10       = tamanho
              rounded-xl      = bordas arredondadas
              bg-black        = fundo preto
              flex            = layout flexível
              items-center    = centraliza vertical
              justify-center  = centraliza horizontal
            */}
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
              N
            </div>

            {/* Nome da marca */}
            <h1 className="text-xl font-semibold text-gray-900">
              <a href="#">NovaAI</a>
            </h1>
          </div>

          {/* ================= MENU DESKTOP ================= */}

          {/*
            hidden md:flex

            hidden  = escondido por padrão
            md:flex = aparece em telas médias pra cima
          */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">

            {/* Link individual */}
            <li>
              <a
                href="#features"
                className="hover:text-black transition-colors duration-200"
              >
                Recursos
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                className="hover:text-black transition-colors duration-200"
              >
                Preços
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-black transition-colors duration-200"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-black transition-colors duration-200"
              >
                Contato
              </a>
            </li>
          </ul>

          {/* ================= AÇÕES DESKTOP ================= */}

          {/*
            Área dos botões do desktop
          */}
          <div className="hidden md:flex items-center gap-4">

            {/*
              Botão principal CTA

              bg-black          = fundo preto
              hover:bg-gray-800 = muda cor no hover
              rounded-xl        = arredondamento
            */}
            <button className="bg-black hover:bg-gray-800 transition-colors text-white px-5 py-2.5 rounded-xl text-sm font-medium">
              Comece agora
            </button>
          </div>

          {/* ================= BOTÃO MOBILE ================= */}

          {/*
            md:hidden

            Esconde em telas médias/grandes
            Mostra apenas mobile
          */}
          <button
            className="md:hidden text-gray-800"

            /*
              Ao clicar:
              menuOpen vira o oposto do valor atual

              false -> true
              true -> false
            */
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {/*
              Renderização condicional

              Se menuOpen for true:
              mostra X

              Senão:
              mostra Menu
            */}
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MENU MOBILE ================= */}

        {/*
          Só aparece se menuOpen for true
        */}
        {menuOpen && (

          /*
            Menu dropdown mobile
          */
          <div className="md:hidden mt-3 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-5 text-sm font-medium text-gray-700">

            <a href="#" className="hover:text-black transition-colors">
              Recursos
            </a>

            <a href="#" className="hover:text-black transition-colors">
              Preços
            </a>

            <a href="#" className="hover:text-black transition-colors">
              Sobre
            </a>

            <a href="#" className="hover:text-black transition-colors">
              Contato
            </a>

            {/* Botão principal mobile */}
            <button className="bg-black text-white py-3 rounded-xl mt-2">
              Comece agora
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;