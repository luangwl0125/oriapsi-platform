// components/Hero.jsx
export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 bg-sereneWhite">
            <h1 className="text-5xl font-title text-auroraBlue mb-4">
                Luz para a mente. Ferramentas para a prática.
            </h1>
            <p className="max-w-xl mb-8">
                Transforme sua rotina clínica com inteligência, clareza e ética.
            </p>
            <button className="px-8 py-4 bg-auroraBlue text-sereneWhite font-title rounded-lg hover:bg-blue-700">
                Começar Agora
            </button>
        </section>
    );
}
