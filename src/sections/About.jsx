function About() {
  return (
    /*
      Section principal
    */
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="text-center">
        {/* Badge */}
        <span
          className="
              inline-block

              px-4
              py-1.5

              rounded-full

              bg-white
              border
              border-gray-200

              text-sm
              font-medium
              text-gray-700
              "
        >
          Sobre a NovaAI
        </span>
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="max-w-7xl mx-auto">
        {/* ================= GRID ================= */}

        {/*
          Layout responsivo

          Mobile:
          1 coluna

          Desktop:
          2 colunas
        */}
        <div
          className="
          grid
          gap-16

          lg:grid-cols-2
          items-center
          "
        >
          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div>
            {/* Título */}
            <h2
              className="
              mt-6

              text-4xl
              md:text-5xl

              font-bold
              text-gray-900

              leading-tight
              "
            >
              Impulsionando o futuro da automação com IA
            </h2>

            {/* Descrição */}
            <p
              className="
              mt-6

              text-lg
              text-gray-600

              leading-relaxed
              max-w-xl
              "
            >
              A NovaAI ajuda as empresas a automatizar fluxos de trabalho,
              otimizar operações e obter insights valiosos por meio da
              inteligência artificial moderna.
            </p>

            {/* Botão */}
            <button
              className="
              mt-8

              px-6
              py-3

              rounded-2xl

              bg-black
              text-white

              font-medium

              hover:bg-gray-800

              transition-all
              duration-300
              "
            >
              Saiba mais
            </button>

            {/* ================= STATS ================= */}

            <div
              className="
              mt-14

              grid
              grid-cols-3

              gap-8
              "
            >
              {/* Stat 1 */}
              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-gray-900
                  "
                >
                  10k+
                </h3>

                <p className="mt-2 text-gray-600">Usuários Ativos</p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-gray-900
                  "
                >
                  98%
                </h3>

                <p className="mt-2 text-gray-600">Taxa de Automação</p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-gray-900
                  "
                >
                  24/7
                </h3>

                <p className="mt-2 text-gray-600">Suporte Premium</p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div
            className="
            relative

            bg-white

            border
            border-gray-200

            rounded-[32px]

            p-8

            shadow-xl
            "
          >
            {/* Card superior */}
            <div
              className="
              flex
              items-center
              justify-between
              "
            >
              <div>
                <p className="text-sm text-gray-500">Desempenho de IA</p>

                <h3
                  className="
                  mt-2

                  text-3xl
                  font-bold
                  text-gray-900
                  "
                >
                  94%
                </h3>
              </div>

              {/* Bolinha verde */}
              <div
                className="
                w-14
                h-14

                rounded-full

                bg-green-100

                flex
                items-center
                justify-center
                "
              >
                <div
                  className="
                  w-4
                  h-4

                  rounded-full

                  bg-green-500
                  "
                />
              </div>
            </div>

            {/* Barra fake */}
            <div className="mt-10 space-y-5">
              <div>
                <div
                  className="
                  flex
                  justify-between

                  text-sm
                  text-gray-500
                  "
                >
                  <span>Automação</span>
                  <span>90%</span>
                </div>

                <div
                  className="
                  mt-2

                  h-3
                  rounded-full

                  bg-gray-100
                  "
                >
                  <div
                    className="
                    h-3
                    w-[90%]

                    rounded-full

                    bg-black
                    "
                  />
                </div>
              </div>

              <div>
                <div
                  className="
                  flex
                  justify-between

                  text-sm
                  text-gray-500
                  "
                >
                  <span>Analíses</span>
                  <span>75%</span>
                </div>

                <div
                  className="
                  mt-2

                  h-3
                  rounded-full

                  bg-gray-100
                  "
                >
                  <div
                    className="
                    h-3
                    w-[75%]

                    rounded-full

                    bg-gray-400
                    "
                  />
                </div>
              </div>
            </div>

            {/* Card flutuante */}
            <div
              className="
              absolute

              -bottom-8
              -left-8

              bg-black
              text-white

              rounded-3xl

              px-6
              py-5

              shadow-2xl
              "
            >
              <p className="text-sm text-gray-300">Crescimento da IA</p>

              <h3
                className="
                mt-2

                text-3xl
                font-bold
                "
              >
                +240%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
