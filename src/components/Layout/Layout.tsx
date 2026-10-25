import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="layout">
            <a className="skip_link" href="#contenu">Aller au contenu</a>
            <main id="contenu">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
