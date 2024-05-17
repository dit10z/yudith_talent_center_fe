import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../../hooks/use-auth.jsx";
import { useEffect } from "react";

export function ProtectedPages() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [token]);
  return (
    <div>
      <Outlet />
    </div>
  );
}
