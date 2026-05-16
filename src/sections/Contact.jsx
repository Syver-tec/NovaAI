function Contact() {
  return (
    /*
      Section principal
    */
    <section id="contact" className="py-32 px-6 bg-white">
      {/* ================= CONTAINER ================= */}

      <div className="max-w-7xl mx-auto">
        {/* ================= GRID ================= */}

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
            {/* Badge */}
            <span
              className="
              inline-block

              px-4
              py-1.5

              rounded-full

              bg-gray-100

              text-sm
              font-medium
              text-gray-700
              "
            >
              Entre em contato
            </span>

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
              Vamos construir juntos o futuro da IA
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
              Tem dúvidas sobre a NovaAI? Nossa equipe está pronta para ajudar
              você a automatizar, escalar e transformar seu negócio.
            </p>

            {/* Informações extras */}
            <div className="mt-10 space-y-6">
              {/* Email */}
              <div>
                <p className="text-sm text-gray-500">Email</p>

                <h3
                  className="
                  mt-2

                  text-xl
                  font-semibold
                  text-gray-900
                  "
                >
                  hello@novaai.com
                </h3>
              </div>

              {/* Telefone */}
              <div>
                <p className="text-sm text-gray-500">Telefone</p>

                <h3
                  className="
                  mt-2

                  text-xl
                  font-semibold
                  text-gray-900
                  "
                >
                  +55 (81) 99999-9999
                </h3>
              </div>

              {/* Localização */}
              <div>
                <p className="text-sm text-gray-500">Localização</p>

                <h3
                  className="
                  mt-2

                  text-xl
                  font-semibold
                  text-gray-900
                  "
                >
                  Recife, Brasil
                </h3>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div
            className="
            bg-gray-50

            border
            border-gray-200

            rounded-[32px]

            p-8
            md:p-10
            "
          >
            {/* Form */}
            <form className="space-y-6">
              {/* Nome */}
              <div>
                <label
                  className="
                  block

                  mb-2

                  text-sm
                  font-medium
                  text-gray-700
                  "
                >
                  Nome Completo
                </label>

                <input
                  type="text"
                  placeholder="José Soares"
                  className="
                  w-full

                  px-4
                  py-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-white

                  outline-none

                  focus:ring-2
                  focus:ring-black

                  transition-all
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="
                  block

                  mb-2

                  text-sm
                  font-medium
                  text-gray-700
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="voce@example.com"
                  className="
                  w-full

                  px-4
                  py-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-white

                  outline-none

                  focus:ring-2
                  focus:ring-black

                  transition-all
                  "
                />
              </div>

              {/* Mensagem */}
              <div>
                <label
                  className="
                  block

                  mb-2

                  text-sm
                  font-medium
                  text-gray-700
                  "
                >
                  Mensagem
                </label>

                <textarea
                  rows="5"
                  placeholder="Conte-nos sobre seu projeto..."
                  className="
                  w-full

                  px-4
                  py-4

                  rounded-2xl

                  border
                  border-gray-200

                  bg-white

                  outline-none

                  resize-none

                  focus:ring-2
                  focus:ring-black

                  transition-all
                  "
                />
              </div>

              {/* Botão */}
              <button
                className="
                w-full

                py-4

                rounded-2xl

                bg-black
                text-white

                font-medium

                hover:bg-gray-800

                transition-all
                duration-300
                "
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
