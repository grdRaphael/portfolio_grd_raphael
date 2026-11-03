import { myEmail } from "../../utils/email"
import "./Legal.scss"

// Mentions légales (obligatoires pour tout site en ligne, loi LCEN) et information RGPD
// sur les données du formulaire de contact
const Legal = () => {
    const mail = <a href={`mailto:${myEmail}`}>{myEmail}</a>

    return (
        <article className="legal" aria-labelledby="legal-title">
            <title>Mentions légales | Raphaël Grondin</title>
            <h1 id="legal-title" className="section_title">Mentions légales</h1>
            <p className="legal_updated">Mises à jour le 3 novembre 2026.</p>

            <section className="legal_section" aria-labelledby="legal-editor">
                <h2 id="legal-editor" className="legal_section_title">Éditeur</h2>
                <div className="legal_body">
                    <p>
                        Raphaël Grondin, particulier, Saint-Leu (La Réunion). Site personnel,
                        sans activité commerciale.
                    </p>
                    <p>Directeur de la publication : Raphaël Grondin.</p>
                    <p>Contact : {mail}</p>
                </div>
            </section>

            <section className="legal_section" aria-labelledby="legal-host">
                <h2 id="legal-host" className="legal_section_title">Hébergement</h2>
                <div className="legal_body">
                    <p>
                        Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.{" "}
                        <a href="https://vercel.com" target="_blank" rel="noreferrer">
                            vercel.com<span className="sr_only"> (nouvel onglet)</span>
                        </a>
                    </p>
                </div>
            </section>

            {/* id : le lien « En savoir plus » du formulaire de contact mène directement ici */}
            <section className="legal_section" id="donnees" aria-labelledby="legal-data">
                <h2 id="legal-data" className="legal_section_title">Données personnelles</h2>
                <div className="legal_body">
                    <p>Responsable du traitement : Raphaël Grondin.</p>
                    <p>
                        <strong>Formulaire de contact.</strong> Quand vous m'écrivez, je reçois votre nom,
                        votre adresse e-mail et votre message. Ils servent uniquement à vous répondre :
                        ils ne sont ni revendus, ni utilisés pour de la prospection.
                        L'envoi passe par Formspree, Inc., une société américaine qui me transmet le message
                        par e-mail et le conserve sur ses serveurs aux États-Unis. Pour éviter ce transfert,
                        vous pouvez m'écrire directement à {mail}.
                    </p>
                    <p>
                        <strong>Durée de conservation.</strong> Je garde les messages le temps de notre échange,
                        puis au plus trois ans après notre dernier contact.
                    </p>
                    <p>
                        <strong>Hébergement.</strong> Comme tout hébergeur, Vercel enregistre des journaux
                        techniques (adresse IP, navigateur, page demandée) pour faire fonctionner et protéger
                        le site. Vercel adhère au Data Privacy Framework, le cadre qui encadre les transferts
                        de données entre l'Union européenne et les États-Unis.
                    </p>
                    <p>
                        <strong>Police d'écriture.</strong> La police Manrope est chargée depuis Google Fonts :
                        votre navigateur transmet donc votre adresse IP à Google.
                    </p>
                    <p>
                        <strong>Cookies.</strong> Ce site ne dépose aucun cookie et n'utilise aucun outil
                        de mesure d'audience.
                    </p>
                    <p>
                        <strong>Vos droits.</strong> Vous pouvez demander à consulter, corriger ou supprimer
                        vos données, ou vous opposer à leur utilisation, en m'écrivant à {mail}.
                        Si ma réponse ne vous convient pas, vous pouvez adresser une réclamation à la{" "}
                        <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">
                            CNIL<span className="sr_only"> (nouvel onglet)</span>
                        </a>.
                    </p>
                </div>
            </section>

            <section className="legal_section" aria-labelledby="legal-ip">
                <h2 id="legal-ip" className="legal_section_title">Propriété intellectuelle</h2>
                <div className="legal_body">
                    <p>
                        Les textes et visuels du site appartiennent à Raphaël Grondin, sauf mention contraire.
                        Les projets de formation reprennent des maquettes fournies par OpenClassrooms.
                        Les icônes viennent de Phosphor Icons et les logos des technologies de Devicon,
                        tous deux sous licence MIT ; les marques citées appartiennent à leurs propriétaires.
                    </p>
                </div>
            </section>
        </article>
    )
}

export default Legal
