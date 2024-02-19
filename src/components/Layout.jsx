import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Hero from "./Hero";
import Features from "./Features";

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