import "./App.css";
import Introduction from "./sections/intro/Introduction";
import Projects from "./sections/projects/Projects";
import CustomTimeline from "./sections/timeline/CustomTimeline";
import ContactMe from "./sections/contact_me/ContactMe";
import Acheivements from "./sections/acheivements/Acheivements";
import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Projects />
      <CustomTimeline />
      <Acheivements />
      <ContactMe />
    </div>
  );
}

export default App;
