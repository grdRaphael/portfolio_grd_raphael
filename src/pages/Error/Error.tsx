import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
    return (
        <section className="error">
            <title>Page introuvable | Raphaël Grondin</title>
            <h1 className="error_code">404</h1>
            <p className="error_text">Cette page n'existe pas.</p>
            <Link to="/" className="error_link">Retour à l'accueil</Link>
        </section>
    )
}

export default Error
