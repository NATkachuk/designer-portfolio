import "./Section4.scss"
import Client1 from "../../../assets/Homepage/Png/Client1.png"
import Client2 from "../../../assets/Homepage/Png/Client2.png"
import Client3 from "../../../assets/Homepage/Png/Client3.png"
import Star  from "../../../assets/Homepage/Svg/Star.svg" 

function Section4() {
  return (
    <section className="section4">
        <h2 className="section4__title">Clients</h2>
        <div className="section4-container">
            <div className="section4-box">
                <p className="section4-box__text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="section4-cont">
                    <img src={Client1} alt="Client1" className="section4-cont__img" />
                    <div className="section4-cont__wrap">
                        <div className="section4-cont__wrap-stars">
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                        </div>
                        <p className="section4-cont__wrap-text">Gemma Nolen, <br />Google</p>
                    </div>
                </div>
            </div>
            <div className="section4-box">
                <p className="section4-box__text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="section4-cont">
                    <img src={Client2} alt="Client2" className="section4-cont__img" />
                    <div className="section4-cont__wrap">
                        <div className="section4-cont__wrap-stars">
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                        </div>
                        <p className="section4-cont__wrap-text">Gemma Nolen, <br />Google</p>
                    </div>
                </div>
            </div>
            <div className="section4-box">
                <p className="section4-box__text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="section4-cont">
                    <img src={Client3} alt="Client3" className="section4-cont__img" />
                    <div className="section4-cont__wrap">
                        <div className="section4-cont__wrap-stars">
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                            <img src={Star} alt="Star" className="section4-cont__wrap-stars-img" />
                        </div>
                        <p className="section4-cont__wrap-text">Gemma Nolen, <br />Google</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section4