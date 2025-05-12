import "./Section2.scss"
import placeholder1 from "../../../assets/Homepage/Png/placeholder1.png"
import placeholder2 from "../../../assets/Homepage/Png/placeholder2.png"
import placeholder3 from "../../../assets/Homepage/Png/placeholder3.png"
function Section2() {
  return (
    <section className="section2">
        <div className="section2-container">
            <div className="section2-box">
                <img src={placeholder1} alt="placeholder1" className="section2-box__img" />
                <div className="section2-box__textbox">
                    <p className="section2-box__textbox-text1">Product design</p>
                    <p className="section2-box__textbox-text2">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
            </div>
            <div className="section2-box">
                <img src={placeholder2} alt="placeholder2" className="section2-box__img" />
                <div className="section2-box__textbox">
                    <p className="section2-box__textbox-text1">Art direction</p>
                    <p className="section2-box__textbox-text2">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
            </div>
            <div className="section2-box">
                <img src={placeholder3} alt="placeholder3" className="section2-box__img" />
                <div className="section2-box__textbox">
                    <p className="section2-box__textbox-text1">Visual design</p>
                    <p className="section2-box__textbox-text2">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2