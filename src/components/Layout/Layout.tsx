import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './Layout.scss'

const Layout = () => {
    return (
        <div className="layout">
            <a className="skip_link" href="#contenu">Aller au contenu</a>
            <Header/>
            <main id="contenu">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
