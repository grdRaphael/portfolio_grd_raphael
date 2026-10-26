import "./About.scss"


const About = () => {
    return (
        <section className="about block" id="a-propos" aria-labelledby="about-title" >
            <div className="about_intro">
                <h2 id="about-title" className="section_title section_title--numbered">À propos</h2>
                <p className="about_hook">
                    Je suis Raphaël Grondin, développeur web full-stack : je crée des applications
                    complètes, de l'interface en React à l'API en Node.js, en prêtant attention à
                    leur accessibilité et à leurs performances.
                </p>
            </div>

            <dl className="about_acts">
                <div>
                    <dt>Parcours</dt>
                    <dd>
                        Ancien coach sportif puis responsable de centre chez BodyHit, à La Réunion, j’ai
                        écrit mes premières lignes de code avec Google Apps Script, pour automatiser la
                        gestion des adhérents, les relances clients et les rapports. Le plaisir de
                        simplifier le travail quotidien m’a donné envie d’en faire mon métier.
                    </dd>
                </div>
                <div>
                    <dt>Formation et stack</dt>
                    <dd>
                        Je termine aujourd’hui la formation Développeur web d’OpenClassrooms. J’y ai
                        pratiqué HTML, CSS, JavaScript et React, ainsi que Node.js, Express et MongoDB
                        pour le back-end. J’ai aussi abordé l’organisation Agile à travers la
                        planification d’un projet avec Scrum et Kanban.
                    </dd>
                </div>
                <div>
                    <dt>Projet marquant</dt>
                    <dd>
                        Sophie Bluel : après l’avoir codé en JavaScript, je l’ai réécrit de ma propre
                        initiative en React et TypeScript, puis mis en ligne avec une API protégée.
                        En optimisant les images côté serveur, la démo est passée de 10,4 Mo à 534 Ko
                        d’images (−95 %).
                    </dd>
                </div>
                <div>
                    <dt>Approche</dt>
                    <dd>
                        J’aime comprendre ce que je construis et soigner les détails qui facilitent
                        l’utilisation. Je note chaque décision technique dans un journal de bord, pour
                        pouvoir l’expliquer et y revenir.
                    </dd>
                </div>
                <div>
                    <dt>Ambitions</dt>
                    <dd>
                        Je recherche un premier poste de développeur full stack junior, idéalement au sein 
                        d’une équipe produit à taille humaine, en startup ou en PME, où je pourrai progresser
                        aux côtés de développeurs expérimentés. Je souhaite approfondir TypeScript et l’architecture
                        back-end, et continuer à explorer le développement mobile, découvert avec GymTracker.
                    </dd>
                </div>
            </dl>
        </section>
    )
}

export default About
