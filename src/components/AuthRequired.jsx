import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");
  console.log("Logged in", isLoggedIn);

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
      />
    );
  }
  return <Outlet />;
}
