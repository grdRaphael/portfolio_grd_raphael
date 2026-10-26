import { useParams } from "react-router-dom"
import data from "../../../data/projects.json"
import type { Project } from "../../types/project"
import Error from "../Error/Error"
import "./ProjectPage.scss"

const projects: Project[] = data

// Les visiteurs qui ont demandé moins d'animations voient l'image fixe plutôt que la vidéo
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

const ProjectPage = () => {
    // L'id vient de l'adresse : /projet/kasa donne { id: "kasa" }
    const { id } = useParams()
    const project = projects.find((p) => p.id === id)

    // Adresse tapée à la main ou projet supprimé : on affiche la 404 dans le gabarit
    if (!project) {
        return <Error />
    }


    const sections = [
        { title: "Contexte", text: project.context },
        { title: "Objectifs", text: project.objectives },
        { title: "Stack technique", text: project.stack },
        { title: "Compétences développées", text: project.skills },
        { title: "Résultats et impact", text: project.results },
        { title: "Perspectives d'amélioration", text: project.improvements },
    ]

    return (
        <>
            {/* React 19 place cette balise dans le <head> ; une seule chaîne, d'où le template literal */}
            <title>{`${project.title} — Projet ${project.category} | Raphaël Grondin`}</title>

            <section className="project_hero" aria-labelledby="project-title">
                <div className="project_hero_text">
                    <span className="tag code">
                        {project.code} · {project.category} · {project.year}
                    </span>
                    <h1 id="project-title" className="project_title">{project.title}</h1>
                    <p className="project_tagline">{project.tagline}</p>
                    <ul className="project_logos">
                        {project.logos.map((logo) => (
                            <li className="tag" key={logo.name}>
                                <img className="logo" src={logo.src} alt="" width="20" height="20" />
                                {logo.name}
                            </li>
                        ))}
                    </ul>
                    <div className="project_links">
                        {project.links.demo && (
                            <a className="project_link project_link--primary" href={project.links.demo} target="_blank" rel="noreferrer">
                                Voir la démo<span className="sr_only"> (nouvel onglet)</span>
                            </a>
                        )}
                        {project.links.github && (
                            <a className="project_link" href={project.links.github} target="_blank" rel="noreferrer">
                                Code sur GitHub<span className="sr_only"> (nouvel onglet)</span>
                            </a>
                        )}
                    </div>
                    {project.links.note && <p className="project_links_note">{project.links.note}</p>}
                </div>

                <div className="project_media">
                    {project.video && !reduceMotion ? (
                        <video
                            src={project.video}
                            poster={project.cover}
                            autoPlay
                            muted
                            playsInline
                            aria-label={`Présentation animée du projet ${project.title}`}
                        />
                    ) : (
                        <img src={project.cover} alt={`Écrans du projet ${project.title}`} />
                    )}
                </div>
            </section>

            <section className="project_sections block" aria-label="Description du projet">
                {sections.map((section) => (
                    <div className="project_section" key={section.title}>
                        <h2 className="project_section_title">{section.title}</h2>
                        <p>{section.text}</p>
                    </div>
                ))}
            </section>

            <section className="project_captures block" aria-labelledby="captures-title">
                <h2 id="captures-title" className="section_title">Captures d'écran</h2>
                <div className="project_captures_grid">
                    {project.captures.map((capture) => (
                        <img key={capture.src} src={capture.src} alt={capture.alt} loading="lazy" />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProjectPage
