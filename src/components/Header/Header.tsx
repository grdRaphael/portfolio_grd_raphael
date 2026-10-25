import { Link } from "react-router-dom"
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
