import { useState, type SubmitEvent } from "react"
import "./Contact.scss"

type Errors = {
    name?: string
    email?: string
    message?: string
}

// Adresse encodée en Base64 et décodée par le navigateur : elle n'apparaît en clair
// ni dans le HTML ni dans le JavaScript publié, les robots qui cherchent des « @ » ne la trouvent pas
const myEmail = atob("Z3JvbmRpbnJhcGhhZWxAbGl2ZS5mcg==")

// Formspree reçoit le formulaire et me le transfère par e-mail : pas de serveur à héberger
const FORMSPREE_URL = "https://formspree.io/f/xjyyyrbo"

// Un seul état pour l'envoi : il ne peut pas être « en cours » et « envoyé » en même temps
type Status = "idle" | "sending" | "sent" | "error"

const Contact = () => {
    const [errors, setErrors] = useState<Errors>({})
    const [status, setStatus] = useState<Status>("idle")

    // async : on attend la réponse de Formspree avant d'afficher le résultat
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        // Sans cette ligne, le navigateur rechargerait la page en envoyant le formulaire
        e.preventDefault()
        const form = e.currentTarget
        // Formulaire non contrôlé : on lit les champs une seule fois, à l'envoi
        const data = new FormData(form)
        const name = String(data.get("name")).trim()
        const email = String(data.get("email")).trim()
        const message = String(data.get("message")).trim()

        // Pot de miel : un humain ne voit pas ce champ, un robot le remplit.
        // S'il est rempli, on fait comme si tout allait bien, sans rien envoyer.
        if (data.get("website")) {
            setStatus("sent")
            form.reset()
            return
        }
        // Champ vide pour un humain : inutile de le transmettre
        data.delete("website")

        const newErrors: Errors = {}
        if (!name) newErrors.name = "Indiquez votre nom."
        if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Indiquez une adresse e-mail valide, par exemple nom@domaine.fr."
        if (message.length < 10) newErrors.message = "Votre message doit faire au moins 10 caractères."

        setErrors(newErrors)
        const firstError = Object.keys(newErrors)[0]
        if (firstError) {
            setStatus("idle")
            // Le focus va sur le premier champ en erreur : au clavier ou au lecteur d'écran,
            // on entend tout de suite quel champ corriger et pourquoi (aria-describedby)
            const field = form.elements.namedItem(firstError)
            if (field instanceof HTMLElement) field.focus()
            return
        }

        setStatus("sending")
        try {
            // Accept: application/json => Formspree répond en JSON au lieu de rediriger vers sa page de remerciement
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            })
            if (!response.ok) throw new Error(`Formspree : ${response.status}`)
            setStatus("sent")
            form.reset()
        } catch {
            // Réseau coupé ou refus de Formspree : on garde le message saisi pour pouvoir réessayer
            setStatus("error")
        }
    }

    return (
        <section className="contact block" id="contact" aria-labelledby="contact-title">
            <div className="contact_intro">
                <h2 id="contact-title" className="section_title section_title--numbered">Contact</h2>
                <p className="contact_text">Un poste, un projet, une question ? Écrivez-moi.</p>
                <ul className="contact_links">
                    <li>
                        <a href="https://github.com/grdRaphael" target="_blank" rel="noreferrer">
                            GitHub<span className="sr_only"> (nouvel onglet)</span>
                        </a>
                    </li>
                    <li><a href={`mailto:${myEmail}`}>{myEmail}</a></li>
                </ul>
            </div>

            {/* noValidate : on affiche nos propres messages d'erreur, plus clairs que ceux du navigateur */}
            <form className="contact_form" onSubmit={handleSubmit} noValidate>
                {/* Pot de miel anti-robots (idée vue chez Gaël Manzola) : caché à l'écran,
                    aux lecteurs d'écran (aria-hidden) et au clavier (tabIndex -1) */}
                <div className="contact_honeypot" aria-hidden="true">
                    <label htmlFor="website">Laissez ce champ vide</label>
                    <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="contact_field">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined} />
                    {errors.name && <p className="contact_error" id="name-error">{errors.name}</p>}
                </div>

                <div className="contact_field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined} />
                    {errors.email && <p className="contact_error" id="email-error">{errors.email}</p>}
                </div>

                <div className="contact_field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined} />
                    {errors.message && <p className="contact_error" id="message-error">{errors.message}</p>}
                </div>

                {/* Désactivé pendant l'envoi : un double clic n'envoie pas deux fois le message */}
                <button className="contact_submit" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Envoi…" : "Envoyer"}
                </button>

                {/* role="status" : la zone existe dès le départ, le lecteur d'écran annonce ce qui y apparaît */}
                <p className="contact_status" role="status">
                    {status === "sent" && "Merci, votre message est bien envoyé ! Je vous réponds rapidement."}
                    {status === "error" && "L'envoi a échoué. Réessayez, ou écrivez-moi directement à l'adresse ci-contre."}
                </p>
            </form>
        </section>
    )
}

export default Contact
