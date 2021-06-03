import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Projects from "./components/projects/Projects"
import Experience from "./components/experience/Experience"
import Interests from "./components/interests/Interests"
import Contact from "./components/contact/Contact"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
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
