import { Navigate } from "react-router-dom";

import { useAuth } from "@features/auth";

export default function ProtectedRoute({ children, redirectTo = "/" }) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to={redirectTo} replace />;

  return children;
}