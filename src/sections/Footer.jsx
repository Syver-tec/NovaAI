import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    /*
      Footer principal
    */
    <footer
      className="
      bg-black
      text-white

      py-20
      px-6
      "
    >
      {/* ================= CONTAINER ================= */}

      <div className="max-w-7xl mx-auto">
        {/* ================= TOP ================= */}

        <div
          className="
          grid
          gap-16

          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div>
            {/* Logo */}
            <h2
              className="
              text-3xl
              font-bold
              "
            >
              NovaAI
            </h2>

            {/* Descrição */}
            <p
              className="
              mt-6

              text-gray-400

              leading-relaxed
              "
            >
              Soluções modernas de IA para empresas que buscam automatizar,
              escalar e crescer.
            </p>
          </div>

          {/* ================================================= */}
          {/* LINKS */}
          {/* ================================================= */}

          <div>
            <h3
              className="
              text-lg
              font-semibold
              "
            >
              Navegação
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#features"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Recursos
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Preços
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* ================================================= */}
          {/* COMPANY */}
          {/* ================================================= */}

          <div>
            <h3
              className="
              text-lg
              font-semibold
              "
            >
              Companhia
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Carreiras
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Política de Privacidade
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                  text-gray-400
                  hover:text-white

                  transition-all
                  "
                >
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          {/* ================================================= */}
          {/* SOCIALS */}
          {/* ================================================= */}

          <div>
            <h3
              className="
              text-lg
              font-semibold
              "
            >
              Siga-nos
            </h3>

            {/* Ícones */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="
                w-12
                h-12

                rounded-2xl

                bg-white/10

                flex
                items-center
                justify-center

                hover:bg-white
                hover:text-black

                transition-all
                duration-300
                "
              >
                <Twitter size={20} />
              </a>

              <a
                href="#"
                className="
                w-12
                h-12

                rounded-2xl

                bg-white/10

                flex
                items-center
                justify-center

                hover:bg-white
                hover:text-black

                transition-all
                duration-300
                "
              >
                <Github size={20} />
              </a>

              <a
                href="#"
                className="
                w-12
                h-12

                rounded-2xl

                bg-white/10

                flex
                items-center
                justify-center

                hover:bg-white
                hover:text-black

                transition-all
                duration-300
                "
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
          mt-20
          pt-8

          border-t
          border-white/10

          flex
          flex-col
          gap-4

          md:flex-row
          md:items-center
          md:justify-between
          "
        >
          {/* Copyright */}
          <p className="text-gray-400">© 2026 NovaAI. Todos os direitos reservados.</p>

          {/* Extra */}
          <p className="text-gray-500 text-sm">
            Construído com React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
