import skills from "../../../data/skills.json"
import "./Skills.scss"

const Skills = () => {
    return (
        <section className="skills block block--wide" id="competences" aria-labelledby="skills-title">
            <h2 id="skills-title" className="section_title section_title--numbered">Compétences</h2>
            <div className="skills_grid">
                {skills.map((group) => (
                    <article className="skills_card" key={group.title}>
                        <h3 className="skills_card_title">{group.title}</h3>
                        <ul className="skills_list">
                            {group.items.map((item) => (
                                <li className="skills_item" key={item.name}>
                                    <img className="skills_icon" src={`/icons/${item.icon}.svg`} alt="" width="22" height="22" />
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Skills
