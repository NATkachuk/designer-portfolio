import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import "./About.scss"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"

function About() {
  return (
    <>
     <Header/>
     <main className="main">
        <Section1/>
        <Section2 />
     </main>
     <Footer/>
    </>
  )
}

export default About