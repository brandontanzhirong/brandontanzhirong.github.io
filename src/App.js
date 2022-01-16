import "./App.css";
import Home from "./components/sections/home/Home";
import Projects from "./components/sections/projects/Projects";
import CustomTimeline from "./components/sections/timeline/CustomTimeline";
import ContactMe from "./components/sections/contact_me/ContactMe";
import Acheivements from "./components/sections/acheivements/Acheivements";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: { fontSize: "3.5em" },
    h2: { fontSize: "2em" },
    h3: { fontSize: "1.3em" },
    h4: { fontSize: "1em" },
    h5: { fontSize: "1em" },
    h6: { fontSize: "1em" },
    subtitle1: { fontSize: "0.9em" },
    subtitle2: { fontSize: "1em" },
    body1: { fontSize: "1em" },
    body2: { fontSize: "1em" },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
        <Projects />
        <CustomTimeline />
        <Acheivements />
        <ContactMe />
      </ThemeProvider>
    </div>
  );
}

export default App;
