import './Filters.scss'

// Repris de Sophie Bluel : le filtre actif est un état du parent (null = « Tous »)
type FiltersProps = {
    filter: string | null
    setFilter: (category: string | null) => void
    categories: string[]
}

const Filters = ({ filter, setFilter, categories }: FiltersProps) => {
    return (
        <div className="filters" role="group" aria-label="Filtrer les projets">
            <button
                type="button"
                className={`filters__btn ${filter === null ? "filters__btn--active" : ""}`}
                aria-pressed={filter === null}
                onClick={() => setFilter(null)}
            >Tous</button>
            {categories.map((category) => (
                <button
                    type="button"
                    className={`filters__btn ${filter === category ? "filters__btn--active" : ""}`}
                    aria-pressed={filter === category}
                    key={category}
                    onClick={() => setFilter(category)}
                >{category}</button>
            ))}
        </div>
    )
}

export default Filters
