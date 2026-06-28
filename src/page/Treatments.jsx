import { useState } from 'react';
import '../styles/06-treatments.css';
import Header from '../elements/Header';
const TREATMENTS_DATA = [
    {
        id: 'limpieza',
        title: 'Limpieza Dental Profunda',
        description: 'Eliminación de sarro y placa bacteriana para prevenir caries y mantener tus encías totalmente sanas.',
        price: 'S/. 120',
        benefits: ['Elimina manchas superficiales', 'Previene la gingivitis', 'Aliento fresco']
    },
    {
        id: 'blanqueamiento',
        title: 'Blanqueamiento Dental',
        description: 'Aclara varios tonos el color de tus dientes con tecnología segura que protege tu esmalte.',
        price: 'S/. 350',
        benefits: ['Resultados inmediatos', 'Gel desensibilizante', 'Tono natural']
    },
    {
        id: 'resinas',
        title: 'Curaciones con Resina Estética',
        description: 'Reconstrucción de piezas dentales dañadas por caries utilizando materiales del mismo color de tu diente.',
        price: 'S/. 90',
        benefits: ['Libre de metal', 'Alta durabilidad', 'Invisibles a la vista']
    },
    {
        id: 'ortodoncia',
        title: 'Consulta de Ortodoncia',
        description: 'Evaluación e inicio de tratamiento con brackets o alineadores para corregir la posición de tus dientes.',
        price: 'Evaluación gratuita',
        benefits: ['Estudio radiográfico preliminar', 'Plan detallado', 'Opciones estéticas']
    }
];

export default function Treatments() {
    const [selectedTreatments, setSelectedTreatments] = useState([]);

    const WHATSAPP_NUMBER = '51999888777'; // Reemplazar con tu número real

    const toggleTreatment = (id) => {
        if (selectedTreatments.includes(id)) {
            setSelectedTreatments(selectedTreatments.filter(item => item !== id));
        } else {
            setSelectedTreatments([...selectedTreatments, id]);
        }
    };

    const handleSendRequest = () => {
        if (selectedTreatments.length === 0) return;

        // Obtener los nombres de los tratamientos seleccionados
        const selectedNames = TREATMENTS_DATA
            .filter(t => selectedTreatments.includes(t.id))
            .map(t => `- ${t.title}`)
            .join('\n');

        const message = `Hola Edu Dental, revisé sus tratamientos y estoy interesado en agendar una cita para:\n\n${selectedNames}\n\n¿Podrían indicarme la disponibilidad de horarios, por favor?`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <section className="treatments-section" id="tratamientos">
                <div className="treatments-header">
                    <h2>Nuestros Tratamientos</h2>
                    <p>Selecciona uno o varios tratamientos de tu interés para cotizar o agendar tu cita directamente por WhatsApp.</p>
                </div>

                <div className="treatments-grid">
                    {TREATMENTS_DATA.map((treatment) => {
                        const isSelected = selectedTreatments.includes(treatment.id);
                        return (
                            <div
                                key={treatment.id}
                                className={`treatment-card ${isSelected ? 'selected' : ''}`}
                                onClick={() => toggleTreatment(treatment.id)}
                            >
                                {/* Checkbox minimalista */}
                                <div className="card-checkbox">
                                    <span className="checkbox-icon"></span>
                                </div>

                                <div className="card-body">
                                    <h3 className="treatment-title">{treatment.title}</h3>
                                    <p className="treatment-description">{treatment.description}</p>

                                    <ul className="treatment-benefits">
                                        {treatment.benefits.map((benefit, idx) => (
                                            <li key={idx}>✓ {benefit}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="card-footer">
                                    <span className="treatment-price">{treatment.price}</span>
                                    <span className="selection-text">
                                        {isSelected ? 'Seleccionado' : 'Añadir a la consulta'}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Barra flotante de acción sutil al seleccionar elementos */}
                <div className={`action-bar ${selectedTreatments.length > 0 ? 'visible' : ''}`}>
                    <div className="action-bar-content">
                        <p>
                            Has seleccionado <strong>{selectedTreatments.length}</strong> tratamiento(s)
                        </p>
                        <button className="btn-send-whatsapp" onClick={handleSendRequest}>
                            Consultar citas por WhatsApp →
                        </button>
                    </div>
                </div>
            </section>
        </>

    );
}