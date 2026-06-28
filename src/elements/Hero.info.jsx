import React, { useState, useEffect, useRef } from 'react';
import '../styles/05-hero.css';
import slider1 from '../assets/slider/dentistaSlite1.jpg'
import slider2 from '../assets/slider/dentistaSlite2.jpg'
import slider3 from '../assets/slider/dentistaSlite3.jpg'
const images = [
    slider1,
    slider2,
    slider3
];

const slides = [
    {
        title: 'Recupera la sonrisa que siempre quisiste',
        subtitle: 'Atención odontológica profesional y personalizada. Tu salud dental es nuestra prioridad.',
        icon: ''
    },
    {
        title: 'Tratamientos de vanguardia',
        subtitle: 'Tecnología de última generación para resultados excepcionales y duraderos.',
        icon: ''
    },
    {
        title: 'Confianza y experiencia',
        subtitle: 'Más de 10 años cuidando sonrisas con profesionalismo y calidez humana.',
        icon: ''
    }
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);

    // Cambiar slide automáticamente cada 5 segundos
    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, []);

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            changeSlide((currentIndex + 1) % slides.length);
        }, 5000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const changeSlide = (newIndex) => {
        if (newIndex === currentIndex || isAnimating) return;

        setIsAnimating(true);
        setIsFading(true);

        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsFading(false);
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }, 600);
    };

    const goToSlide = (index) => {
        if (index === currentIndex) return;
        stopAutoPlay();
        changeSlide(index);
        startAutoPlay();
    };

    const currentSlide = slides[currentIndex];
    const currentImage = images[currentIndex];

    return (
        <section className="hero">
            {/* Imagen de fondo con transición */}
            <div
                className={`hero-background ${isFading ? 'fade-out' : 'fade-in'}`}
                style={{ backgroundImage: `url(${currentImage})` }}
            />

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Contenido */}
            <div className="hero-content">
                <h1>
                    {currentSlide.title.split(' ').map((word, i) =>
                        word.toLowerCase() === 'sonrisa' ? (
                            <span key={i}>{word} </span>
                        ) : (
                            word + ' '
                        )
                    )}
                </h1>

                <p className="subtitle">
                    <span className="dynamic-text">
                        <span className="text-wrapper">
                            <span>{currentSlide.icon} {currentSlide.subtitle}</span>
                        </span>
                    </span>
                </p>

                <button className="btn-hero shimmer">
                    <span>Agendar cita</span>
                    <span className="icon">→</span>
                </button>
            </div>

            {/* Indicadores (dots) */}
            <div className="hero-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Contador de slides */}
            <div className="hero-counter">
                <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                {' / '}
                {String(slides.length).padStart(2, '0')}
            </div>
        </section>
    );
}

export default Hero;