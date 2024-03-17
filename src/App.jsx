import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './assets/bootstrap.min.css';
import Home from './pages/home';
import About from './pages/about';
import Details from './pages/details';
import "./assets/bootstrap.bundle.min.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="details" element={<Details />} />
            </Route>
         </Routes>
        </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">RainDrop-LDR</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExample04">
                      <ul className="navbar-nav me-auto mb-2 mb-md-0">
                          <li className="nav-item">
                              <a className="nav-link" href="/details">Rincian</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/about">Tentang</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      <Outlet />
    </div>
  );
}
