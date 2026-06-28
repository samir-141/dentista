import { useState, useEffect } from 'react'
import '../styles/01-variables.css'
import '../styles/02-header.css'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('inicio')

    // Detectar scroll para sombra del header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Cerrar menú al hacer clic en un enlace
    const handleNavClick = (section) => {
        setActiveSection(section)
        setMenuOpen(false)
    }

    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const navItems = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'tratamientos', label: 'Tratamientos' },
        { id: 'sobre-mi', label: 'Sobre mí' },
        { id: 'contacto', label: 'Contacto' }
    ]

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>

            {/* Logo */}
            <a href="#inicio" className="nombre" onClick={() => handleNavClick('inicio')}>
                <span>EDU DENTAL</span>
            </a>

            {/* Navegación principal */}
            <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={activeSection === item.id ? 'active' : ''}
                            onClick={() => handleNavClick(item.id)}
                        >
                            <a href={`#${item.id}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Botón Hamburguesa Simplificado */}
            <button
                className={`hamburger ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
            >
                <span className="hamburger-box"></span>
            </button>

        </header>
    )
}