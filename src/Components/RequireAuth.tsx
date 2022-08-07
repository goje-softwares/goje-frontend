import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function RequireAuth() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { auth }: any = useAuth();
  const location = useLocation();
  return auth?.name ? (
    // like props.children but for react-router-dom routes
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
}
