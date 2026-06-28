import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom' // ← Importamos NavLink para manejo de rutas activas
import '../styles/01-variables.css'
import '../styles/02-header.css'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Detectar scroll solo para añadir la sombra estética al Header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    // Estructura de navegación orientada a URLs
    const navItems = [
        { path: '/', label: 'Inicio' },
        { path: '/tratamientos', label: 'Tratamientos' },
        { path: '/sobre-mi', label: 'Sobre mí' },
        { path: '/contacto', label: 'Contacto' }
    ]

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>

            {/* Logo - Te redirige a la raíz de la web */}
            <NavLink to="/" className="nombre" onClick={() => setMenuOpen(false)}>
                <span>EDU DENTAL</span>
            </NavLink>

            {/* Navegación principal */}
            <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path} onClick={() => setMenuOpen(false)}>
                            {/* NavLink añade automáticamente la clase .active si estás en esa ruta */}
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburguesa */}
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