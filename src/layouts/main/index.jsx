import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../hooks/use-auth";

export function MainLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
