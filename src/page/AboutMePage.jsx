import '../styles/07-aboutme.css';
// Puedes importar aquí una foto tuya o de la clínica si la tienes
import doctorPhoto from '../assets/dentista.png';

export default function AboutMePage() {

    const pillars = [
        {
            title: "Trato Humano y Cercano",
            description: "Entendemos que ir al dentista puede generar ansiedad. Nos tomamos el tiempo de escucharte y explicarte cada paso sin prisas."
        },
        {
            title: "Instalaciones Modernas",
            description: "Utilizamos tecnología de vanguardia para garantizar diagnósticos precisos, tratamientos rápidos y el menor impacto o dolor posible."
        },
        {
            title: "Transparencia Total",
            description: "Aquí no hay sorpresas. Te ofrecemos presupuestos claros desde el primer día y alternativas reales adaptadas a tus necesidades."
        }
    ];

    return (
        <section className="about-page">
            <div className="about-container">

                {/* Bloque Principal Introductorio */}
                <div className="about-hero">
                    <div className="about-text">
                        <span className="about-badge">Sobre Mí</span>
                        <h1>Cuidando tu salud dental con ciencia y empatía</h1>
                        <p className="about-lead">
                            Hola, soy el especialista detrás de <strong>Edu Dental</strong>. Mi misión no es solo arreglar dientes, sino devolverle la confianza y la calidad de vida a cada persona que se sienta en nuestro sillón.
                        </p>
                        <p className="about-body">
                            Con más de 5 años de experiencia en el sector odontológico, he aprendido que el mejor tratamiento siempre empieza por una escucha activa. Nos especializamos en crear un entorno tranquilo, libre de estrés, donde tu bienestar y tu ritmo son la única prioridad.
                        </p>
                    </div>

                    {/* Espacio reservado para la Foto Profesional */}
                    <div className="about-image-container">
                        <div className="about-image-placeholder">
                            {/* Descomenta la etiqueta <img> cuando tengas tu foto real */}
                            {<img src={doctorPhoto} alt="Especialista de Edu Dental" />}
                            {/* <div className="placeholder-text">
                                <span>Espacio para Foto Profesional</span>
                                <small>Dimensión sugerida: Vertical (600x800px)</small>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Bloque de Pilares / Confianza */}
                <div className="about-pillars-section">
                    <div className="pillars-header">
                        <h2>Por qué confiar tu sonrisa en nosotros</h2>
                        <p>Diseñamos una experiencia odontológica completamente diferente y relajada.</p>
                    </div>

                    <div className="pillars-grid">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="pillar-card">
                                <span className="pillar-number">0{index + 1}</span>
                                <h3 className="pillar-title">{pillar.title}</h3>
                                <p className="pillar-description">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}