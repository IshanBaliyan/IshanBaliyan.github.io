import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Projects from "./components/projects/Projects"
import Experience from "./components/experience/Experience"
import Interests from "./components/interests/Interests"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";

function App() {

  // the menu is initially closed
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Experience/>
        <Interests/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
