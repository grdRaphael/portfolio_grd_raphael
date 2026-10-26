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
                    <svg className="hero_star" viewBox="0 0 100 100" aria-hidden="true">
                        <path d="M50 8v84M14 29l72 42M14 71l72-42" />
                    </svg>
                    <div className="hero_actions">
                        <Link to={{ pathname: "/", hash: "#projets" }} className="hero_cta">
                            <span className="hero_cta_circle" aria-hidden="true">→</span>
                            Voir mes projets
                        </Link>
                        {/* Le PDF s'ouvre dans le lecteur du navigateur, qui propose de le télécharger.
                            Même bouton rond que les projets, en verre pour le distinguer */}
                        <a className="hero_cta" href="/cv-raphael-grondin.pdf" target="_blank" rel="noreferrer">
                            <span className="hero_cta_circle hero_cta_circle--glass" aria-hidden="true">CV</span>
                            Mon CV<span className="sr_only"> (PDF, 107 Ko, nouvel onglet)</span>
                        </a>
                    </div>
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
