import React from "react";
import "../styles/Base.scss"
import {FaFacebookF} from'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {FaGooglePlusG} from 'react-icons/fa'


function Base(){
    return(
        <div className="cont">
            
           <section className="foot2">
            <div>
                <h3>Contact us</h3>
                <p>Call us 24/7</p>
                <h3>1800 9797 69</h3>
                <p>502 New Design Str, Melbourne, Australia
contact@martfury.co</p>
               <span><FaFacebookF/></span>
               <span><BsInstagram/></span>
               <span><FaTwitter/></span>
               <span><FaGooglePlusG/></span>
            </div>
          <div>
            <h3>Quick Links</h3>
            <p>policy</p>
            <p>Terms and conditions</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>Faq policy</p>
          </div>
          <div>
            <h3>Company</h3>
            <p>About us</p>
            <p>Affilate</p>
            <p>Carrer</p>
            <p>Contact us</p>
          </div>
          <div>
            <h3>Business</h3>
            <p>Our press</p>
            <p>Check out</p>
            <p>My Account</p>
            <p>Shop</p>
          </div>
           </section>

        </div>
    )
}
export default Base;