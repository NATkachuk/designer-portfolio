import "./Section1.scss"
import Pablo from "../../../assets/Homepage/Png/Pablo.png"
function Section1() {
  return (
    <section className="section1-about">
        <div className="section1-container">
            <img src={Pablo} alt="Pablo" className="section1-container__img" />
            <div className="section1-textbox">
                <u className="section1-textbox__text">Pablo Designero </u>
                <p className="section1-textbox__text1">Designer & Unicorn Trainer</p>
            </div>
        </div>
        <p className="section1-about__text">Bio:<br/>Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everydays lil details. And sometimes in leftover food I find in my beard.</p>
    </section>
  )
}

export default Section1