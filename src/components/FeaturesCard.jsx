/*
  Componente reutilizável de card.

  Ele recebe props:
  - icon
  - title
  - description
*/
function FeatureCard({ icon, title, description }) {

  return (

    /*
      Div principal do card
    */
    <div>

      {/*
        Container visual do ícone

        border              = borda cinza
        rounded-3xl         = bordas arredondadas
        p-8                 = espaçamento interno

        hover:-translate-y-2
        faz o card subir levemente ao passar o mouse

        hover:shadow-xl
        aumenta a sombra no hover

        hover:border-gray-300
        deixa a borda mais forte

        transition-all
        anima todas as mudanças

        duration-300
        duração da animação (300ms)
      */}
      <div
        className="
        border border-gray-200
        rounded-3xl
        p-8

        hover:-translate-y-2
        hover:shadow-xl
        hover:border-gray-300

        transition-all
        duration-300
        "
      >

        {/*
          Ícone enviado pela prop icon

          Exemplo:
          <Sparkles />
        */}
        {icon}

      </div>

      {/*
        Título do card

        mt-4           = margem superior
        text-xl        = texto grande
        font-bold      = negrito
        text-gray-900  = cor escura
        ml-2           = margem esquerda
      */}
      <h3 className="mt-4 text-xl font-bold text-gray-900 ml-3">

        {/*
          Título enviado pela prop
        */}
        {title}

      </h3>

      {/*
        Descrição do card

        text-gray-600 = cinza médio
        ml-2          = margem esquerda
      */}
      <p className="text-gray-600 ml-3">

        {/*
          Texto da descrição
        */}
        {description}

      </p>
    </div>
  );
}

/*
  Exportando componente
  para poder usar em outros arquivos
*/
export default FeatureCard;