import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<TodoPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
