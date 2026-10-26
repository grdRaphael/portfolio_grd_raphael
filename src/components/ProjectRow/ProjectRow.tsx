import { Link } from "react-router-dom"
import type { Project } from "../../types/project"
import "./ProjectRow.scss"

type ProjectRowProps = {
    project: Project
    isActive: boolean
    onActivate: () => void
}

// Une ligne de l'index des projets (idée vue chez Isaac Fayemi).
// Survol ou focus clavier : la ligne devient active et l'aperçu à droite change.
const ProjectRow = ({ project, isActive, onActivate }: ProjectRowProps) => {
    return (
        <li className={`project_row ${isActive ? "project_row--active" : ""}`}>
            <Link
                to={`/projet/${project.id}`}
                className="project_row_link"
                onMouseEnter={onActivate}
                onFocus={onActivate}
            >
                <h3 className="project_row_title">{project.title}</h3>
                <span className="project_row_code code">{project.code} · {project.category}</span>
                {/* Sur mobile (pas de survol), l'image et la phrase s'affichent dans la ligne */}
                <img className="project_row_image" src={project.cover} alt="" loading="lazy" decoding="async" />
                <p className="project_row_tagline">{project.tagline}</p>
            </Link>
        </li>
    )
}

export default ProjectRow
