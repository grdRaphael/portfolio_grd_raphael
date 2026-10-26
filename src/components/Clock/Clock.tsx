import { useEffect, useState } from "react"

// Heure locale en direct (idée vue chez Isaac Fayemi et Ev Astapov).
const TIME_ZONE = "Indian/Reunion"

const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
})

const Clock = () => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        // Nettoyage : on arrête le minuteur quand le composant disparaît
        return () => clearInterval(timer)
    }, [])

    return <time dateTime={now.toISOString()}>{formatter.format(now)}</time>
}

export default Clock
