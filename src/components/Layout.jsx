import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ isLoggedIn, updateLoginStatus }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav isLoggedIn={isLoggedIn} updateLoginStatus={updateLoginStatus} />
      <main className="flex flex-col py-12 px-8 mx-auto w-full max-w-screen-xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
