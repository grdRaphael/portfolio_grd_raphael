import "./Background.scss"

// Fond décoratif : des lueurs de couleur floutées, derrière tout le site.
// aria-hidden : rien à lire pour un lecteur d'écran.
const Background = () => {
    return (
        <div className="background" aria-hidden="true">
            <span className="background_blob background_blob--red" />
            <span className="background_blob background_blob--orange" />
            <span className="background_blob background_blob--blue" />
        </div>
    )
}

export default Background
