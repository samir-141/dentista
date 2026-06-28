import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/05-hero.css';
import slider1 from '../assets/slider/dentistaSlite1.jpg';
import slider2 from '../assets/slider/dentistaSlite2.jpg';
import slider3 from '../assets/slider/dentistaSlite3.jpg';

const HERO_DATA = [
    {
        title: 'Recupera la sonrisa que siempre quisiste',
        subtitle: 'Atención odontológica profesional y personalizada. Tu salud dental es nuestra prioridad.',
        image: slider1
    },
    {
        title: 'Tratamientos de vanguardia',
        subtitle: 'Tecnología de última generación para resultados excepcionales y duraderos.',
        image: slider2
    },
    {
        title: 'Confianza y experiencia',
        subtitle: 'Más de 10 años cuidando sonrisas con profesionalismo y calidez humana.',
        image: slider3
    }
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const intervalRef = useRef(null);

    // CONFIGURACIÓN DE WHATSAPP
    // Reemplaza con el número de la clínica (incluye el código de país, ej: 51 para Perú)
    const WHATSAPP_NUMBER = '51926430324';
    const WHATSAPP_MESSAGE = encodeURIComponent(
        'Hola Edu Dental, me gustaría obtener más información y agendar una cita de valoración, por favor.'
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

    const changeSlide = useCallback((newIndex) => {
        if (newIndex === currentIndex || isFading) return;

        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsFading(false);
        }, 400);
    }, [currentIndex, isFading]);

    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            changeSlide((currentIndex + 1) % HERO_DATA.length);
        }, 5000);
    }, [currentIndex, changeSlide]);

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, [startAutoPlay]);

    const handleDotClick = (index) => {
        stopAutoPlay();
        changeSlide(index);
        startAutoPlay();
    };

    const { title, subtitle, image } = HERO_DATA[currentIndex];

    return (
        <section className="hero">
            <div
                className={`hero-background ${isFading ? 'fading' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
            />

            <div className="hero-overlay" />

            <div className={`hero-content ${isFading ? 'fading' : ''}`}>
                <h1>{title}</h1>
                <p className="subtitle">{subtitle}</p>

                {/* El botón ahora es un enlace externo optimizado */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero shimmer"
                >
                    <span>Agendar cita</span>
                    <span className="icon">→</span>
                </a>
            </div>

            <div className="hero-footer">
                <div className="hero-indicators">
                    {HERO_DATA.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Ir al slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="hero-counter">
                    <span className="current">{String(currentIndex + 1).padStart(2, '0')}</span>
                    <span className="separator">/</span>
                    <span className="total">{String(HERO_DATA.length).padStart(2, '0')}</span>
                </div>
            </div>
        </section>
    );
}