import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p><strong>Tomato.</strong> is a modern and easy-to-use food ordering website designed to bring your favorite meals right to your doorstep. It offers a wide variety of cuisines and dishes, allowing users to browse menus, place orders quickly, and enjoy a smooth online food ordering experience. With a clean interface and fast service, Tomato makes discovering and ordering delicious food simple and convenient anytime, anywhere.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8867154250</li>
                    <li>ronbonnke789@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2026 &copy; Ronbonnke - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer