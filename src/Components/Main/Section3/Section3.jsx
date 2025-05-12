import "./Section3.scss"
import FreeBird from "../../../assets/Homepage/Png/FreeBird.png"
import PurpleHaze from "../../../assets/Homepage/Png/PurpleHaze.png"
import YouReallyGotMe from "../../../assets/Homepage/Png/YouReallyGotMe.png"
import AmericanGirl from "../../../assets/Homepage/Png/AmericanGirl.png"
import WholeLottaLove from "../../../assets/Homepage/Png/WholeLottaLove.png"
import UnderPressure from "../../../assets/Homepage/Png/UnderPressure.png"
function Section3() {
  return (
    <section className="section3">
        <h2 className="section3__title">My latest work</h2>
        <div className="section3-container">
            <div className="section3-box">
                <img src={FreeBird} alt="FreeBird" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Free Bird</p>
                    <p className="section3-box__textbox-text2">Lynyrd Skynyrd</p>
                </div>
            </div>
            <div className="section3-box">
                <img src={PurpleHaze} alt="PurpleHaze" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Purple Haze</p>
                    <p className="section3-box__textbox-text2">Jimi Hendrix</p>
                </div>
            </div>
            <div className="section3-box">
                <img src={YouReallyGotMe} alt="YouReallyGotMe" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">You Really Got Me</p>
                    <p className="section3-box__textbox-text2">The Kinks</p>
                </div>
            </div>
            <div className="section3-box">
                <img src={AmericanGirl} alt="AmericanGirl" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">American Girl</p>
                    <p className="section3-box__textbox-text2">Tom Petty</p>
                </div>
            </div>
            <div className="section3-box">
                <img src={WholeLottaLove} alt="WholeLottaLove" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Whole Lotta Love</p>
                    <p className="section3-box__textbox-text2">Led Zeppelin</p>
                </div>
            </div>
            <div className="section3-box">
                <img src={UnderPressure} alt="UnderPressure" className="section3-box__img" />
                <div className="section3-box__textbox">
                    <p className="section3-box__textbox-text1">Under Pressure </p>
                    <p className="section3-box__textbox-text2">Queen</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3