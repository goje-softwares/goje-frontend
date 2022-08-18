import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();
  // TODO: improve security
  return auth?.name ? (
    // like props.children but for react-router-dom routes
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
}
