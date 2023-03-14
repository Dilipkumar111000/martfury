import React from "react";
import "../styles/navbar.scss"
import  {MdOutlineStorage} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import{BsCart4} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'
import Main from "./register";



function Navbar(){
   
    return(
        <div>
        <div className="head">
             <p>Welcome to Martfury Online Shopping Store !</p>
             <p>store Location</p>
             <p>track your oder</p>
             <select>
                <option>usd</option>
                <option>EURO</option>
                <option>GBP</option>
             </select>
             <select>
                <option>English</option>
                <option>Germany</option>
                <option>France</option>
             </select>
        </div>

        <div className="nav">
            <div className="lll">
            <img className='logo'src='https://reactstorefronts.com/static/img/logo.png'/> 
            <p className='dots'> <MdOutlineStorage/></p>
            </div> 
            <div>
                <select className="s1">
                    <option>All</option>
                    <option>Babies and moms</option>
                    <option>Books and office</option>
                    <option>Cars and motorcycles</option>
                    <option>Clothing & Apprel</option>
                    <option>Bags</option>
                    <option>kids</option>
                    <option>Mens fashion</option>
                    <option>Sunglass</option>
                    <option>computer & Technolgies</option>
                    <option>Desktop</option>
                    <option>Laptop</option>
                    <option>Smartphones</option>
                    <option>Headphones</option>
                    <option>Earphones</option>
                    <option>Home theaters</option>
                </select>
                <input className='ser' type='search' placeholder="i am shopping for.." /><button className="btn">serach</button>
            </div>
            <div className="carts">
                <p><AiOutlineHeart/></p>
                <p><BsCart4/></p>
                <p><CiUser/><span>Login</span>  <span><Main/></span></p>
            </div> 
        </div>
        <div className="pil">
             <a href="">Iphone x </a> 
             <a href="">Macbook</a>
             <a href="">Apple watch</a>
            </div> 
    
        <div className="yel">
           <p>ALL CATEGORIES</p>
           <p>TODAY DEALS</p>
           <p>ELECTRONICS</p>
           <p>CLOTHING</p>
           <p>COMPUTERS</p>
           <p>FEAUTERS</p>
           <p>MOM BABY</p>
           <p>BOOK AND MORE</p>
           <p></p>
        </div>
      
        </div>
    )
}
export default Navbar;