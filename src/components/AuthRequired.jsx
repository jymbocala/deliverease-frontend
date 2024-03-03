import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");
  console.log("Logged in:", isLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    const isFromUnknownUrl = location.state?.fromUnknownUrl || true;
    console.log("isFromUnknownUrl:", isFromUnknownUrl);
    return (
      <Navigate
        to="/login"
        state={{ message: "You must login first", isFromUnknownUrl }}
      />
    );
  }
  return <Outlet />;
}
