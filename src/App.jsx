import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HomeLayout from "./pages/HomeLayout";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="bg-gray-500">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
