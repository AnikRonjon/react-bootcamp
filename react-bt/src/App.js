import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar";
import Project from "./pages/Project/Project";
import ProjectList from "./pages/Project/ProjectList";
import ProjectNav from "./pages/Project/ProjectNav";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<ProjectNav />}>
            <Route index element={<ProjectList />} />
            <Route path=":id" element={<Project />} />
          </Route>
          <Route path="*" element={<h2>404 | Page not found</h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
