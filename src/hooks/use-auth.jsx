import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode correctly
import { userLogin } from "./apis";

export const AuthContext = createContext(null);

export function AuthProvider(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token || null; // Return null if token is not found
  };

  const getUserId = () => {
    const userId = localStorage.getItem("userId");
    return userId || null; // Return null if userId is not found
  };

  const getEmail = () => {
    const email = localStorage.getItem("email");
    return email || null; // Return null if email is not found
  };

  console.log("LocalStorage contents:", JSON.stringify(localStorage));

  const [userId, setUserId] = useState(getUserId());
  const [token, setToken] = useState(getToken());
  const [email, setEmail] = useState(getEmail());

  useEffect(() => {
    console.log("Initial userId:", userId);
    console.log("Initial token:", token);
    console.log("Initial email:", email);
  }, []);

  const saveToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const saveUserId = (userId) => {
    localStorage.setItem("userId", userId);
    setUserId(userId);
  };

  const saveEmail = (email) => {
    localStorage.setItem("email", email);
    setEmail(email);
  };

  const login = (token, userId, email) => {
    saveToken(token);
    saveUserId(userId);
    saveEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    setToken(null);
    setUserId(null);
    setEmail(null);
    navigate("/");
  };

  const signIn = async (email, password) => {
    try {
      const data = await userLogin(email, password);
      const { token, userId, email: userEmail } = data;
      login(token, userId, userEmail);
      navigate("/mainPage");
    } catch (err) {
      console.error("Error is", err);
    }
  };

  const contextValue = useMemo(
    () => ({
      userId,
      token,
      email,
      login,
      logout,
      signIn,
    }),
    [userId, token, email, signIn]
  );

  const checkTokenExpiry = () => {
    if (!token) return false;
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = new Date().getTime();
      return decodedToken.exp * 1000 < currentTime;
    } catch (error) {
      console.error("Error decoding token: ", error);
      return true;
    }
  };

  useEffect(() => {
    if (checkTokenExpiry()) {
      logout();
    }
  }, [token]);

  useEffect(() => {
    if (!token && location.pathname !== "/") {
      navigate("/");
    } else if (token && location.pathname === "/") {
      navigate("/mainPage");
    }
  }, [token, location, navigate]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Must be used inside Auth Provider");

  return context;
}
