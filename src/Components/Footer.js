import React from 'react'
import footerLogo from '../image/footerLogo.png'
import {BsFacebook} from "react-icons/bs"
import {FaInstagram} from "react-icons/fa"
import {ImWhatsapp} from "react-icons/im"
import {FiMail} from "react-icons/fi"

const Footer = () => {
  return (
    <footer className='footer-div'>
      <div className='row'>

        <div className='col'>
          <img src={footerLogo} className="logo"/>
          <p>Mad Teasing brings to you an array of colours and the finest fit to go with your mood. How do you want to feel today? </p>
        </div>

        <div className='col'>
          <h3>Office <div className='underline'><span></span></div> </h3>
          <p>Sharah e Faisal</p>
          <p>406, 4th floor, Karachi</p>
          <p className='email-id'>madteasing@gmail.com</p>
          <h4 >+92 336 9066-949</h4>
        </div>

        <div className='col'>
          <h3>Links <div className='underline'><span></span></div> </h3>
          <ul>

            <li>
              <a href="https://Wa.me/923369066949" target="_blank"><ImWhatsapp size={30}/></a>
            </li>

            <li>
              <a href="https://www.instagram.com/mad_teasing/" target="_blank"><FaInstagram size={30}/></a>
            </li>

            <li>
              <a href="https://www.facebook.com/madteasing" target="_blank"><BsFacebook size={30}/></a>
            </li>

            <li>
              <a href="mailto:"><FiMail size={30}/></a>
            </li>
          </ul>
        </div>
        
        <div className='col'>
          <h3>Newsletter <div className='underline'><span></span></div> </h3>
          <form>
            <input type='email' placeholder='Enter your email' required/>
            <button type='submit'>
              Submit
            </button>
          </form>
        </div>    
      </div>
      <hr/>
      <p className='copyright'> ⓒ Mad Teasing 2021 - All Rights Reserved </p>
    </footer>
  )
}

export default Footer
