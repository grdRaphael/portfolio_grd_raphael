import { Link } from "react-router-dom"
import Clock from "../Clock/Clock"
import "./Hero.scss"

const Hero = () => {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero_top">
                <p className="hero_label">Portfolio 2026</p>
                <dl className="hero_infos">
                    <div>
                        <dt>Spécialité</dt>
                        <dd>React · Node.js</dd>
                    </div>
                    <div>
                        <dt>Formation</dt>
                        <dd>Développeur Web — OpenClassrooms</dd>
                    </div>
                    <div>
                        <dt>Statut</dt>
                        <dd className="hero_status">Disponible</dd>
                    </div>
                    <div>
                        <dt>Heure locale</dt>
                        <dd>Saint-Leu, La Réunion · <Clock /></dd>
                    </div>
                </dl>
            </div>

            <div className="hero_bottom">
                <div className="hero_side">
                    {/* L'étoile devient le lien du CV : un texte circulaire l'entoure et tourne au survol.
                        Le PDF s'ouvre dans le lecteur du navigateur, qui propose de le télécharger */}
                    <a className="hero_badge" href="/cv-raphael-grondin.pdf" target="_blank" rel="noreferrer">
                        <svg className="hero_badge_ring" viewBox="0 0 160 160" aria-hidden="true">
                            <defs>
                                {/* Un cercle de rayon 62 tracé en deux demi-arcs : le chemin que suit le texte */}
                                <path id="hero-badge-circle" d="M 18 80 a 62 62 0 1 1 124 0 a 62 62 0 1 1 -124 0" />
                            </defs>
                            <text>
                                {/* textLength = périmètre du cercle (2 × π × 62 ≈ 389) : le texte fait le tour exact */}
                                <textPath href="#hero-badge-circle" textLength="389" lengthAdjust="spacing">
                                    Curriculum vitae · PDF · Curriculum vitae · PDF ·
                                </textPath>
                            </text>
                        </svg>
                        <svg className="hero_star" viewBox="0 0 100 100" aria-hidden="true">
                            <path d="M50 8v84M14 29l72 42M14 71l72-42" />
                        </svg>
                        {/* Le nom du lien reprend le texte visible (« Curriculum vitae ») : WCAG 2.5.3 */}
                        <span className="sr_only">Curriculum vitae (PDF, 107 Ko, nouvel onglet)</span>
                    </a>
                    <Link to={{ pathname: "/", hash: "#projets" }} className="hero_cta">
                        <span className="hero_cta_circle" aria-hidden="true">→</span>
                        Voir mes projets
                    </Link>
                </div>

                <h1 id="hero-title" className="hero_title">
                    <span className="hero_kicker">Raphaël Grondin, développeur web</span>
                    <span className="hero_big">Full-Stack</span>
                </h1>
            </div>
        </section>
    )
}

export default Hero
