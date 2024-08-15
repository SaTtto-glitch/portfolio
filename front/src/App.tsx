import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Top } from "./pages/top";
// import BlogPage from "./pages/BlogTop";
// import BlogDetail from "./pages/BlogDetail";
import "@/scss/index.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </Router>
  );
}

export default App;
