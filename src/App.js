import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import AppLayout from "./layout/AppLayout";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import api from "./utils/api";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    // 토큰을 통해 유저정보를 가져옴
    try {
      const storedToken = sessionStorage.getItem("token");
      if (storedToken) {
        const response = await api.get("/user/me");
        setUser(response.data.user);
      }
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AppLayout user={user} setUser={setUser}/>}>
        <Route
          index
          element={
            <PrivateRoute user={user}>
              <TodoPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/login" element={<LoginPage setUser={setUser} user={user}/>} />
      </Route>
    </Routes>
  );
}

export default App;
