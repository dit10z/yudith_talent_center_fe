import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/index";
import LandingPage from "./pages/LandingPage";
// import MyWishlist from "./pages/mywishlist";
// import { ThemeProvider } from "@mui/material/styles";
// import { DarkTheme, LightTheme } from "./resource/themes";
// import MyRequest from "./pages/myrequest";
// import ApproveList from "./pages/approvelist";
// import { Toaster } from "react-hot-toast";
import { ProtectedPages } from "./layouts/protected";
import LoginModal from "./components/modal/LoginModal";
import { MainLayout } from "./layouts/main";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route element={<ProtectedPages />}>
          <Route path="/mainPage" element={<Main />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
