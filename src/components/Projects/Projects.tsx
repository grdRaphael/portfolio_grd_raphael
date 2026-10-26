import { useState } from "react"
import data from "../../../data/projects.json"
import type { Project } from "../../types/project"
import Filters from "../Filters/Filters"
import "./Projects.scss"

const projects: Project[] = data

// Une catégorie par bouton
const categories = [...new Set(projects.map((project) => project.category))]

const Projects = () => {
    const [filter, setFilter] = useState<string | null>(null)

    // Valeur calculée à chaque affichage à partir du filtre : pas besoin d'un second état
    const visibleProjects = filter === null
        ? projects
        : projects.filter((project) => project.category === filter)

    return (
        <section className="projects block block--wide" id="projets" aria-labelledby="projects-title">
            <div className="projects_header">
                <h2 id="projects-title" className="section_title section_title--numbered">Projets</h2>
                <Filters filter={filter} setFilter={setFilter} categories={categories} />
            </div>

            {/* Liste provisoire */}
            <ul>
                {visibleProjects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </section>
    )
}

export default Projects
