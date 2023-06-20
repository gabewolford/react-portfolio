import { Routes, Route, Link } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Nav from "../Nav"
import HomePage from "../HomePage"
import WorkPage from "../WorkPage"
import MePage from "../MePage"
import ScrollToTop from "../ScrollToTop"
import 'animate.css';

function App() {
  return (
    <>
        <Analytics />
        <ScrollToTop />
        <Nav />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/me" element={<MePage />} />
          </Routes>
    </>
  )
}

export default App
