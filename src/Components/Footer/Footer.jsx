import "./Footer.scss"
import discord from "../../assets/Homepage/Svg/discord.svg"
import instagram from "../../assets/Homepage/Svg/instagram.svg"
import behanceLogo from "../../assets/Homepage/Svg/behanceLogo.svg"
import dribbbleLogo from "../../assets/Homepage/Svg/dribbbleLogo.svg"
import facebook from "../../assets/Homepage/Svg/facebook.svg"
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <h2 className="footer-container__title">Let’s work together</h2>
            <p className="footer-container__text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className="footer-container__socials">
                <img src={discord} alt="discord" className="footer-container__socials-img" />
                <img src={facebook} alt="facebook" className="footer-container__socials-img" />
                <img src={dribbbleLogo} alt="dribbbleLogo" className="footer-container__socials-img" />
                <img src={instagram} alt="instagram" className="footer-container__socials-img" />
                <img src={behanceLogo} alt="behanceLogo" className="footer-container__socials-img" />
            </div>
        </div>
        <form action="" className="footer-form">
            <input type="text" placeholder="Name" className="footer-form__input" />
            <input type="text" placeholder="Email" className="footer-form__input" />
            <textarea cols="30" rows="10" placeholder="Your message" className="footer-form__textarea">Type your message here </textarea>
            <button className="footer-form__btn">Submit</button>
        </form>
    </footer>
  )
}

export default Footer