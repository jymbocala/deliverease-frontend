import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ isLoggedIn, updateLoginStatus }) {
    return (
        <div className="site-wrapper">
            <Nav isLoggedIn={isLoggedIn} updateLoginStatus={updateLoginStatus}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}