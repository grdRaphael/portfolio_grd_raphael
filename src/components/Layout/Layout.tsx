import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './Layout.scss'
import Background from "../Background/Background"

const Layout = () => {
    const { pathname, hash } = useLocation()

    // React Router ne gère pas le défilement : on va jusqu'à l'ancre (#projets…),
    // sinon on remonte en haut à chaque changement de page
    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView()
        } else {
            window.scrollTo(0, 0) // ramene la page tout en haut quand on change de page (pas de hash)
        }
    }, [pathname, hash])
    return (
        <div className="layout">
            <a className="skip_link" href="#contenu">Aller au contenu</a>
            <Background/>
            <Header/>
            <main id="contenu">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
