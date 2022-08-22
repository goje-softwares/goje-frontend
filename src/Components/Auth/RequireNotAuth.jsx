import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { dashboard } from "../../Global/Routes";
import useAuth from "../../Hooks/useAuth";

export default function RequireNotAuth() {
  const { auth } = useAuth();
  const location = useLocation();
  // TODO: improve security
  return auth?.name ? (
    // like props.children but for react-router-dom routes
    <Navigate to={dashboard} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
