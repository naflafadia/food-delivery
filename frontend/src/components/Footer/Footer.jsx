import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='title'>Flavory.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque accusamus rem neque eveniet labore saepe beatae asperiores aliquam sequi modi aspernatur, debitis in velit dolores excepturi nesciunt omnis dolor.</p>
                <div className="footer-social-icons">
                    <FaFacebookSquare className='icon'/>
                    <FaSquareXTwitter className='icon'/>
                    <FaLinkedin className='icon'/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+62-123-456-789</li>
                    <li>contact@flavory.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-copyright">Copyright 2024 © Flavory.com - All Right Reserved</div>
    </div>
  )
}
