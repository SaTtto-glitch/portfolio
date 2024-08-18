import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Top } from "./pages/top";
import { BlogTop } from "./pages/blogs/blogTop";
import { BlogDetail } from "./pages/blogs/blogDetail";
import "@/scss/index.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/blogs" element={<BlogTop />} />
        <Route path="/blogs/:contentId" element={<BlogDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
