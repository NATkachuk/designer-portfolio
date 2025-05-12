import "./Section1.scss"
import figures from "../../../assets/Homepage/Png/figures.png"
import Behance from "../../../assets/Homepage/Svg/Behance.svg"
import Google from "../../../assets/Homepage/Svg/Google.svg"
import Apple from "../../../assets/Homepage/Svg/Apple.svg"
import Dribbble from "../../../assets/Homepage/Svg/Dribbble.svg"
import Awwwards from "../../../assets/Homepage/Svg/Awwwards.svg" 
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container1">
            <div className="section1-container1__textbox">
                <p className="section1-container1__textbox-text1">Branding | Image making </p>
                <h1 className="section1-container1__textbox-title">My awesome portfolio</h1>
                <p className="section1-container1__textbox-text2">And I made it myself! Yes. In Figma with Anima</p>
            </div>
            <img src={figures}alt="figures" className="section1-container1__img" />
        </div>
        <div className="section1-container2">
            <img src={Behance} alt="Behance" className="section1-container2__img" />
            <img src={Google} alt="Google" className="section1-container2__img" />
            <img src={Apple} alt="Apple" className="section1-container2__img" />
            <img src={Dribbble} alt="Dribbble" className="section1-container2__img" />
            <img src={Awwwards} alt="Awwwards" className="section1-container2__img" />
        </div>
    </section>
  )
}

export default Section1