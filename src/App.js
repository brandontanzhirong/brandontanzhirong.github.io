import "./App.css";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/intro/Introduction";
import Projects from "./pages/projects/Projects";
import Timelines from "./pages/timelines/Timelines";
import ContactMe from "./pages/contact_me/ContactMe";
import Acheivements from "./pages/acheivements/Acheivements";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Introduction />}></Route>
          <Route path="/introduction" element={<Introduction />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/timelines" element={<Timelines />}></Route>
          <Route path="/acheivements" element={<Acheivements />}></Route>
          <Route path="/contact-me" element={<ContactMe />}></Route>
        </Routes>
        <FixedBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
