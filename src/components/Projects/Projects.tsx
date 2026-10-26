import { useState } from "react"
import data from "../../../data/projects.json"
import type { Project } from "../../types/project"
import Filters from "../Filters/Filters"
import ProjectRow from "../ProjectRow/ProjectRow"
import "./Projects.scss"

const projects: Project[] = data

// Une catégorie par bouton, Set => collection qui n'accepte pas les doublons
const categories = [...new Set(projects.map((project) => project.category))]

const Projects = () => {
    const [filter, setFilter] = useState<string | null>(null)
    // Le projet survolé (ou atteint au clavier), montré dans l'aperçu
    const [activeId, setActiveId] = useState(projects[0].id)

    // Valeur calculée à chaque affichage à partir du filtre : pas besoin d'un second état
    const visibleProjects = filter === null
        ? projects
        : projects.filter((project) => project.category === filter)

    // Si le filtre cache le projet actif, l'aperçu passe au premier projet visible
    const active = visibleProjects.find((project) => project.id === activeId) ?? visibleProjects[0]

    // Vidéo dans l'aperçu : seulement sur ordinateur (l'aperçu est masqué sur mobile)
    // et si le visiteur n'a pas demandé à réduire les animations
    const showVideo = active.video
        && window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)").matches

    return (
        <section className="projects block block--wide" id="projets" aria-labelledby="projects-title">
            <div className="projects_header">
                <h2 id="projects-title" className="section_title section_title--numbered">Projets</h2>
                <Filters filter={filter} setFilter={setFilter} categories={categories} />
            </div>

            <div className="projects_index">
                <ul className="projects_list">
                    {visibleProjects.map((project) => (
                        <ProjectRow
                            key={project.id}
                            project={project}
                            isActive={project.id === active.id}
                            onActivate={() => setActiveId(project.id)}
                        />
                    ))}
                </ul>

                {/* Aperçu (ordinateur seulement) : décoratif, les mêmes infos sont dans les liens */}
                <div className="projects_preview" aria-hidden="true">
                    <div className="projects_preview_top code">
                        <span>{active.code} · {active.year}</span>
                        <span>Aperçu</span>
                    </div>
                    {/* Toutes les images sont empilées : seule celle du projet actif est visible (fondu) */}
                    <div className="projects_preview_image">
                        {projects.map((project) => (
                            <img
                                key={project.id}
                                src={project.cover}
                                alt=""
                                className={project.id === active.id ? "is_visible" : ""}
                            />
                        ))}
                        {/* La même vidéo que sur la fiche projet, jouée une fois par-dessus l'image.
                            key : changer de projet recrée la vidéo, qui repart donc du début */}
                        {showVideo && (
                            <video
                                key={active.id}
                                className="projects_preview_video"
                                src={active.video}
                                poster={active.cover}
                                autoPlay
                                muted
                                playsInline
                            />
                        )}
                    </div>
                    <p className="projects_preview_tagline">{active.tagline}</p>
                </div>
            </div>
        </section>
    )
}

export default Projects
