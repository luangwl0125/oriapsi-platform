// frontend/pages/index.jsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="bg-sereneWhite text-mineralGray font-body">
            <Navbar />
            <Hero />

            <section className="max-w-4xl mx-auto py-16 px-4">
                <h2 className="text-3xl font-title text-auroraBlue mb-8">
                    Núcleo Clínico e Organizacional
                </h2>
                <Feature
                    title="Oriapsi Dashboard"
                    text="Painel principal do psicólogo com agenda, pacientes, gravações, documentos e IA integrada."
                />
                <Feature
                    title="Gerenciador de Pacientes"
                    text="Pastas, histórico de atendimentos e dados clínicos de forma segura e estruturada."
                />
                <Feature
                    title="Agenda"
                    text="Compromissos clínicos, reuniões e lembretes integrados ao Google Calendar."
                />
            </section>

            <section className="bg-auroraBlue text-sereneWhite py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-title mb-8">
                        Comunicação, Registro e Documentação
                    </h2>
                    <Feature
                        title="Transcribe"
                        text="Gravação e transcrição automática com geração de resumos temáticos."
                    />
                    <Feature
                        title="Docs"
                        text="Modelos de laudos, relatórios e atestados conforme CFP e LGPD."
                    />
                    <Feature
                        title="Flow"
                        text="Sugestões de técnicas, planejamento terapêutico e insights de progresso."
                    />
                </div>
            </section>

            <section className="max-w-4xl mx-auto py-16 px-4">
                <h2 className="text-3xl font-title text-auroraBlue mb-8">
                    Educação e Teste Gratuito
                </h2>
                <div className="space-y-4">
                    <p>
                        Curso: <strong>O Psicólogo do Futuro</strong> — IA aplicada à prática clínica.
                    </p>
                    <button className="px-6 py-3 bg-softGold text-mineralGray font-title rounded-lg hover:bg-gold-600">
                        Teste Grátis Agora
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    )
}
