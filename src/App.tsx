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

              {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
            </Route>
         </Routes>
        </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
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

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

/*
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Details() {
  return (
    <div>
      <h2>Details</h2>
    </div>
  );
}
*/