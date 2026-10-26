import steps from "../../../data/timeline.json"
import "./Timeline.scss"

const Timeline = () => {
    return (
        <section className="timeline block" id="parcours" aria-labelledby="timeline-title">
            <h2 id="timeline-title" className="section_title section_title--numbered">Parcours</h2>
            <ol className="timeline_list" role="list">
                {steps.map((step) => (
                    <li className="timeline_step" key={step.title}>
                        <span className="timeline_date">{step.date}</span>
                        <div>
                            <h3 className="timeline_title">{step.title}</h3>
                            <p className="timeline_place">{step.place}</p>
                            <p className="timeline_description">{step.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Timeline
