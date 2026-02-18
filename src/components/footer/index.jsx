import './styles.css'
import { assets } from '../../utiles/image';

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className='footer-content'>
       <div className='footer-content-left'>
         <img src={assets.logo} alt="logo" />
         <p>Serves as a digital culinary hub, engaging visitors with immersive, high-resolution imagery, intuitive navigation, and detailed, appetizing content.</p>
         <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="icon" />
            <img src={assets.twitter_icon} alt="icon" />
            <img src={assets.linkedin_icon} alt="icon" />

         </div>
       </div>
       <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
       </div>
       <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+112-454-365</li>
            <li>contact@tomato.com</li>
          </ul>
       </div>
      </div>
      <hr />
      <p className='footer-copyright'>CopyRight 2026 Tomato.com -All Rights Are Reserved</p>
    </div>
  )
}

export default Footer;