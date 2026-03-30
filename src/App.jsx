import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-content">
          <NavLink to="/" className="brand">
            Lupin Cai
          </NavLink>
          <nav className="nav-links" aria-label="Main navigation">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink>
          </nav>
        </div>
      </header>
      

      <main className="container page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} LupinC</p>
          <a href="https://forms.gle/CoUAcT3L3ShSfBK8A" target="_blank" rel="noreferrer">
            Share feedback
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;