import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Top } from "./pages/top";
// import BlogPage from "./pages/BlogTop";
// import BlogDetail from "./pages/BlogDetail";
import "@/scss/index.scss";
import Auth from './components/Auth';
import Admin from './pages/admin';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/portfolio-v2/blog" element={<BlogPage />} />
        <Route path="/portfolio-v2/blog/:id" element={<BlogDetail />} /> */}
        <Route path="/portfolio-v2/" element={<Top />} />
        <Route path="/portfolio-v2/auth" element={<Auth />} />
        <Route path="/portfolio-v2/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
