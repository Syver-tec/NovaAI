/*
  Importando ícones da biblioteca lucide-react
*/
import { Sparkles, ShieldCheck, Rocket, BarChart3 } from "lucide-react";

/*
  Importando o componente reutilizável do card
*/
import FeatureCard from "../components/FeaturesCard";

function Features() {
  /*
    Array com os dados dos cards.

    Cada objeto representa um card.
  */
  const features = [
    {
      title: "Automação de Tarefas",

      description: "Automatize tarefas repetitivas e economize tempo com IA.",

      /*
        Ícone enviado como prop
      */
      icon: <Sparkles className="text-black" />,
    },

    {
      title: "Segurança Avançada",

      description: "Proteja seus dados com sistemas inteligentes e seguros.",

      icon: <ShieldCheck className="text-black" />,
    },

    {
      title: "Alta Performance",

      description: "Experimente velocidade e respostas rápidas em tempo real.",

      icon: <Rocket className="text-black" />,
    },

    {
      title: "Análise de Dados",

      description: "Transforme dados em insights valiosos para sua empresa.",

      icon: <BarChart3 className="text-black" />,
    },
  ];

  return (
    /*
      Section principal

      py-32 = padding vertical
      px-6  = padding lateral
      bg-white = fundo branco
    */
    <section id="features" className="scroll-mt-32 py-32 px-6 bg-white">
      {/*
        Container centralizado
      */}
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}

        <div className="text-center max-w-2xl mx-auto">
          {/*
            Badge pequena acima do título
          */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
            Recursos
          </span>

          {/*
            Título principal
          */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Ferramentas de IA criadas para equipes modernas
          </h2>

          {/*
            Descrição da seção
          */}
          <p className="mt-6 text-lg text-gray-600">
            A NovaAI ajuda empresas a automatizar fluxos de trabalho, gerar
            insights e aumentar a produtividade com soluções inteligentes de IA.
          </p>
        </div>

        {/* ================= GRID DE CARDS ================= */}

        {/*
          Grid responsiva

          gap-8 = espaço entre cards
          md:grid-cols-2 = 2 colunas no tablet
          lg:grid-cols-4 = 4 colunas no desktop
        */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/*
            map() percorre o array features

            Para cada item:
            cria um FeatureCard automaticamente
          */}
          {features.map((feature, index) => (
            <FeatureCard
              /*
                key é obrigatória no map()
              */
              key={index}
              /*
                Props enviadas para o componente
              */
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
