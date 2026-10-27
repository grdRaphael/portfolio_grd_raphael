import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.scss"

// Les sections de la page d'accueil : un lien = une ancre (#id)
const links = [
    { hash: "#a-propos", label: "À propos" },
    { hash: "#competences", label: "Compétences" },
    { hash: "#projets", label: "Projets" },
    { hash: "#parcours", label: "Parcours" },
    { hash: "#contact", label: "Contact" },
]

const Header = () => {
    const { pathname } = useLocation()
    // L'ancre de la section en cours de lecture, ou null si aucune
    const [active, setActive] = useState<string | null>(null)
    // Menu mobile ouvert ou fermé (sur ordinateur, la navigation est toujours visible)
    const [open, setOpen] = useState(false)

    // Met en avant le lien de la section en cours de lecture (idée vue chez Brittany Chiang).
    // L'IntersectionObserver prévient quand un élément entre dans une zone de l'écran ou en sort
    useEffect(() => {
        // Les sections n'existent que sur l'accueil
        if (pathname !== "/") return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const hash = `#${entry.target.id}`
                if (entry.isIntersecting) {
                    setActive(hash)
                } else {
                    // La section quitte la bande : on n'efface que si c'était elle qui était active
                    setActive((current) => (current === hash ? null : current))
                }
            })
        }, { rootMargin: "-40% 0px -55% 0px" })

        links.forEach((link) => {
            const section = document.getElementById(link.hash.slice(1))
            if (section) observer.observe(section)
        })

        // Nettoyage : on arrête d'observer en quittant la page d'accueil
        return () => {
            observer.disconnect()
            setActive(null)
        }
    }, [pathname])

    return (
        <header className="header">
            <div className="header_inner">
                <Link to="/" className="header_brand" onClick={() => setOpen(false)}>
                    Raphaël <em>Grondin</em>
                </Link>
                {/* Bouton du menu (mobile seulement) : aria-expanded annonce s'il est ouvert,
                    aria-controls le relie à la navigation qu'il affiche */}
                <button
                    type="button"
                    className="header_toggle"
                    aria-expanded={open}
                    aria-controls="navigation-principale"
                    onClick={() => setOpen((current) => !current)}
                >
                    <span className="sr_only">Menu</span>
                    <span className="header_toggle_bar header_toggle_bar--top" aria-hidden="true" />
                    <span className="header_toggle_bar header_toggle_bar--bottom" aria-hidden="true" />
                </button>
                <nav
                    id="navigation-principale"
                    className={`header_nav ${open ? "header_nav--open" : ""}`}
                    aria-label="Navigation principale"
                >
                    <ul className="header_list" role="list">
                        {links.map((link) => (
                            <li key={link.hash}>
                                <Link
                                    to={{ pathname: "/", hash: link.hash }}
                                    className="nav_link"
                                    aria-current={active === link.hash ? "location" : undefined}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
