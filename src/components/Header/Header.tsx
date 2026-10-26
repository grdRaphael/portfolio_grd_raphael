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

    // Met en avant le lien de la section en cours de lecture (idée vue chez Brittany Chiang).
    // L'IntersectionObserver prévient un élément entre ou sort dans un telle zone de l'écran
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
                <Link to="/" className="header_brand">
                    Raphaël <em>Grondin</em>
                </Link>
                <nav className="header_nav" aria-label="Navigation principale">
                    <ul className="header_list">
                        {links.map((link) => (
                            <li key={link.hash}>
                                <Link
                                    to={{ pathname: "/", hash: link.hash }}
                                    className="nav_link"
                                    aria-current={active === link.hash ? "location" : undefined}
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
