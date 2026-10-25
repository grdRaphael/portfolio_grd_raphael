import { Link } from "react-router-dom"
import "./Footer.scss"

// Version du site, à mettre à jour à chaque mise en ligne (idée vue chez Lynn Fisher et Ev Astapov)
const VERSION = "v2.0"
const UPDATED = "22/10/2026"

const Footer = () => {
    return (
        <footer className="footer">
            {/* Menu écrit comme une phrase (idée vue chez Michael Gatt) */}
            <nav className="footer_sentence" aria-label="Navigation de bas de page">
                <p>
                    Voir mes <Link to={{ pathname: "/", hash: "#projets" }}>projets</Link>,
                    mon <Link to={{ pathname: "/", hash: "#parcours" }}>parcours</Link>{" "}
                    ou me <Link to={{ pathname: "/", hash: "#contact" }}>contacter</Link>.
                </p>
            </nav>

            <div className="footer_bottom">
                <p>© 2026 Raphaël Grondin</p>
                {/* Idée vue chez Keziah Moselle : dire ce que le site ne fait pas */}
                <p>
                    Aucun traceur, aucune donnée collectée —{" "}
                    <a href="https://github.com/grdRaphael/portfolio_grd_raphael" >code source sur GitHub</a>
                </p>
                <p className="code">{VERSION} · mis à jour le {UPDATED}</p>
            </div>
        </footer>
    )
}

export default Footer
