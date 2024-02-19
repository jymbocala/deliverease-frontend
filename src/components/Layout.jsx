import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import Hero from "./Hero"


export default function Layout() {
    return (
        <div className="site-wrapper">
            <Nav />
            <Hero />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}