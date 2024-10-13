import "./App.css";
import Navbar from "./component/Navbar/navbar.js";
import Intro from "./component/intro/intro.js";
import Skills from "./component/Skills/skills.js";
import Projects from "./component/Projects/index.js";
import Contacts from "./component/Contacts/contacts.js";
import Footer from "./component/Footer/footer.js";
import Education from "./component/Educations/index.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Skills />
      <Projects />

      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
