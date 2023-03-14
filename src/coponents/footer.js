import React from "react";
import "../styles/footer.scss"
import {BsFillRocketTakeoffFill} from 'react-icons/bs'
import {GiRecycle} from 'react-icons/gi';
import {BsWalletFill} from 'react-icons/bs'
import {MdOutlineSupportAgent} from 'react-icons/md';




function Footer(){
    return(
        <div className="foot">
           <div className="icons">
            <div>    <p className="size"><BsFillRocketTakeoffFill/></p></div>
         <div><h3>Free Delivery</h3>
            <p>For all oders over $99</p></div>
           </div>
           <div className="icons">
            <div>    <p className="size"><GiRecycle/></p></div>
         <div><h3>90 days return</h3>
            <p>if any problems</p></div>
           </div>
           <div className="icons">
            <div>    <p className="size"><BsWalletFill/></p></div>
         <div><h3>Secure payment</h3>
            <p>100% secure payment</p></div>
           </div>
           <div className="icons">
            <div>    <p className="size"><MdOutlineSupportAgent/></p></div>
         <div><h3>24/7 support</h3>
            <p>Dedicated support </p></div>
           </div>
        </div>
    )
}
export default Footer;