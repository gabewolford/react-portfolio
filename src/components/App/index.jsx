import { Routes, Route, Link } from "react-router-dom";
import Nav from "../Nav"
import HomePage from "../HomePage"
import WorkPage from "../WorkPage"
import MePage from "../MePage"

function App() {

  return (
    <>
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
