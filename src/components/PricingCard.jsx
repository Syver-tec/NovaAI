/*
  Ícone de check para lista de benefícios
*/
import { Check } from "lucide-react";

/*
  Componente reutilizável de pricing card
*/
function PricingCard({ title, price, description, features, popular }) {
  return (
    /*
      Card principal

      relative = permite posicionar badge absoluta
    */
    <div
      className={`
        
        relative

        border
        rounded-3xl
        p-8

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-2xl

        ${
          /*
            Se popular for true:
            aplica estilos especiais
        */
          popular ? "border-black shadow-xl scale-105" : "border-gray-200"
        }

        `}
    >
      {/* ================= BADGE POPULAR ================= */}
      {popular && (
        /*
          Renderização condicional

          Só aparece se:
          popular === true
        */
        <div
          className="
            absolute 
            top-0
            right-6
            -translate-y-1/2

            bg-black
            text-white

            text-sm
            font-medium

            px-4
            py-1.5

            rounded-full
            "
        >
          Mais Popular
        </div>
      )}

      {/* ================= HEADER ================= */}

      <div>
        {/*Nome do plano */}
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

        {/* Descrição */}
        <p className="mt-3 text-gray-600">{description}</p>

        {/* Preço */}
        <div className="mt-8 flex items-end gap-2">
          <span className="text-5xl font-bold text-gray-900">${price}</span>

          <span className="text-gray-500 mb-1">/mês</span>
        </div>
      </div>

      {/* ================= FEATURES ================= */}

      <div className="mt-10 space-y-4">
        {/*
          Percorre array de benefícios
        */}

        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Ícone de check */}
            <div
              className="
                w-5
                h-5

                rounded-full

                bg-gray-100

                flex
                items-center
                justify-center
                "
            >
              <Check size={12} className="text-green-500" />
            </div>

            {/* Texto */}
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>

      {/* ================= BOTÃO ================= */}

      <button
        className={`
            w-full
            mt-10
            
            py-3
            rounded-2xl
            
            font-medium
            
            transition-all
            duration-300
            
            ${
              popular
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }
        `}
      >
        Comece agora
      </button>
    </div>
  );
}

export default PricingCard;
