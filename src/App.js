import Home from "./pages/Home";
// import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);

  return (
    <Routes>
      <Route exact path="/" element={<Home navigate={navigate} postData={postData} />} />
      <Route path="/login" element={<Login navigate={navigate} setPostData={setPostData} />} />
      <Route path="/register" element={<Register navigate={navigate} />} />
    </Routes>
  );
}
