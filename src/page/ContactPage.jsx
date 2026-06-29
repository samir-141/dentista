import '../styles/08-contact.css';
import ComoLlegarBoton from '../funciones/google.maps'
export default function ContactPage() {
    const WHATSAPP_NUMBER = '51999888777'; // Reemplaza con el número real de tu clínica

    // Mensaje predeterminado amable y directo
    const message = 'Hola Edu Dental, vengo de la página web y me gustaría realizar una consulta general o coordinar una cita.';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const officeHours = [
        { days: 'Lunes a Viernes', hours: '9:00 AM - 7:00 PM' },
        { days: 'Sábados', hours: '9:00 AM - 1:00 PM' },
        { days: 'Domingos y Feriados', hours: 'Cerrado (Atención solo emergencias)' }
    ];

    return (
        <section className="contact-page">
            <div className="contact-container">

                {/* Encabezado Principal */}
                <div className="contact-header">
                    <span className="contact-badge">Contacto</span>
                    <h1>Estamos listos para atenderte</h1>
                    <p>
                        Para brindarte una atención rápida, personalizada y sin esperas, centralizamos todas nuestras citas y consultas directamente a través de WhatsApp.
                    </p>
                </div>

                {/* Grid de Información de Contacto */}
                <div className="contact-grid">

                    {/* Bloque 1: Acción Principal WhatsApp */}
                    <div className="contact-card primary-action">
                        <div className="card-info">
                            <h2>¿Listo para sonreír con confianza?</h2>
                            <p>
                                Haz clic abajo para iniciar una conversación. Nuestro equipo te ayudará a resolver dudas o a encontrar el mejor horario disponible para tu evaluación.
                            </p>
                        </div>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-contact-whatsapp"
                        >

                            Escríbenos por WhatsApp
                        </a>
                    </div>

                    {/* Bloque 2: Horarios y Ubicación */}
                    <div className="contact-card info-details">
                        <div className="info-block">
                            <h3>Horarios de Atención</h3>
                            <ul className="hours-list">
                                {officeHours.map((item, index) => (
                                    <li key={index}>
                                        <span className="days">{item.days}:</span>
                                        <span className="hours">{item.hours}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="info-block location">
                            <h3>Ubicación de la Clínica</h3>
                            <p>Av. Principal 123, Oficina 402</p>
                            <p className="city-detail">Lima, Perú</p>
                            <p><ComoLlegarBoton /></p>
                            <small className="location-note">* Previa cita programada por WhatsApp.</small>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}