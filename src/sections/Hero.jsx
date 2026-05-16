export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-black text-white px-6">   
        
        <h1 className="text-5xl md:text-7xl font-bold text-center max-w-4xl leading-tight">
            Crie experiências digitais incríveis
        </h1>
        
        <p className="text-zinc-400 text-lg max-w-2xl mt-6 text-center">
            Transforme sua ideia em uma experiência digital memorável com nosso template de landing page.
        </p>

        <div className="mt-8 flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Começar
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-900 transition">
                Saiba mais
            </button>
        </div>
        </section>
    )
}