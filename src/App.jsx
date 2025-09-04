import Advantage from "./components/Advantages/Advantage"
import Contact from "./components/Connect/Contact"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import FunLearning from "./components/FunLearningSection/FunLearning"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Resourses from "./components/resourses/Resourses"


const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <FunLearning/>
      <Resourses/>
      <Advantage/>
      <Faq/>
      <Contact/>
      <Footer/>
   
    </div>
  )
}

export default App
