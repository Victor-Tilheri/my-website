import SplashScreen from './components/SplashScreen/SplashScreen.jsx';
import JumpingArrow from './components/JumpingArrow/JumpingArrow.jsx';
import HomeSection from './components/HomeSection/HomeSection.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import SkillsSection from './components/SkillsSection/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'
function App() {

  return (
    <div className="App">
      {/* <SplashScreen/> */}
      <JumpingArrow/>
      <HomeSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
