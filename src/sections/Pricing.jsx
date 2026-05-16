import PricingCard from "../components/PricingCard";

function Pricing() {
  /*
    Array com os planos
  */
  const plans = [
    {
      title: "Iniciante",

      price: "19",

      description: "Ideal para pequenas equipes que estão começando a trabalhar com IA.",

      /*
        Lista de benefícios
      */
      features: [
        "5 Projetos de IA",
        "Analytics Básicos",
        "Suporte por Email",
        "Acesso ao Painel",
      ],

      popular: false,
    },

    {
      title: "Profissional",

      price: "49",

      description: "Ferramentas avançadas para empresas em crescimento.",

      features: [
        "Projetos Ilimitados",
        "Analytics Avançados",
        "Suporte Prioritário",
        "Colaboração em equipe",
      ],

      /*
        Plano em destaque
      */
      popular: true,
    },

    {
      title: "Empresa",

      price: "99",

      description: "Infraestrutura completa de IA para grandes empresas.",

      features: [
        "Soluções de IA dedicadas",
        "24/7 Suporte Premium",
        "Segurança empresarial",
        "Membros de equipe ilimitados",
        "Acesso à API",
      ],

      popular: false,
    },
  ];

  return (
    /*
      Section principal
    */
    <section id="pricing" className="py-32 px-6 bg-gray-50">
      {/* ================= CONTAINER ================= */}

      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}

        <div className="text-center max-w-2xl mx-auto">
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
            Preços
          </span>

          {/* Título */}
          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl

            font-bold
            text-gray-900
            "
          >
            Preços simples para equipes modernas
          </h2>

          {/* Descrição */}
          <p
            className="
            mt-6
            text-lg
            text-gray-600
            "
          >
            Escolha o plano perfeito para o seu negócio e comece a expandir com
            a NovaAI hoje mesmo.
          </p>
        </div>

        {/* ================= GRID ================= */}

        <div
          className="
          mt-20

          grid
          gap-8

          lg:grid-cols-3
          "
        >
          {/*
            Percorre os planos
            e cria os cards
          */}
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
