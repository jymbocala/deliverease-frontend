import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ isLoggedIn, updateLoginStatus }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav isLoggedIn={isLoggedIn} updateLoginStatus={updateLoginStatus}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}