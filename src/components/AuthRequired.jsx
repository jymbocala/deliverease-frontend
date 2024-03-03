import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");
  console.log("Logged in:", isLoggedIn);
  const location = useLocation();

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    const isFromUnknownUrl = location.state?.fromUnknownUrl || true;
    return (
      // Pass the location state to the login page to display a message
      <Navigate
        to="/login"
        state={{ message: "You must login first", isFromUnknownUrl }}
      />
    );
  }
  return <Outlet />;
}
