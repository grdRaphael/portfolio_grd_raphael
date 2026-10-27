import './Filters.scss'

// Repris de Sophie Bluel : le filtre actif est un état du parent (null = « Tous »)
type FiltersProps = {
    filter: string | null
    setFilter: (category: string | null) => void
    categories: string[]
}

const Filters = ({ filter, setFilter, categories }: FiltersProps) => {
    // « Tous » (valeur null) puis une option par catégorie : une seule liste, un seul map
    const options = [
        { label: "Tous", value: null },
        ...categories.map((category) => ({ label: category, value: category })),
    ]

    return (
        <div className="filters" role="group" aria-label="Filtrer les projets">
            {options.map((option) => (
                <button
                    type="button"
                    className={`filters__btn ${filter === option.value ? "filters__btn--active" : ""}`}
                    aria-pressed={filter === option.value}
                    key={option.label}
                    onClick={() => setFilter(option.value)}
                >{option.label}</button>
            ))}
        </div>
    )
}

export default Filters
