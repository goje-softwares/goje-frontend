import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import store from "../../plugins/store";

export default function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.name && store.get("name") ? (
    // like props.children but for react-router-dom routes
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
}
