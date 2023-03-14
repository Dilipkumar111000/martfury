import React from "react";
import '../styles/neck.scss'
import Carousel from "./carousel";

function Refernce(){
    return(
        <div className="par">
           

          
            <div className="car">
             <Carousel/>
            </div>
        <div className="container">
         <img className="img1" src='https://reactstorefronts.com/static/img/slider/home-4/left.jpg' />
        </div>
        <div className="dummy">
            <div className="ch1">
                <div><img className='img1'src="https://reactstorefronts.com/static/img/categories/shop/5.jpg"/></div>
                <div>
                <h4>Electronics</h4>
                <p>Tv televison</p>
                <p>Air conditioner</p>
                <p>Washing Machine</p>
                <p>Audio and Theaters</p>
                </div>
                
            </div>
            <div className="ch1">
                <div><img className='img1'src="https://reactstorefronts.com/static/img/categories/shop/1.jpg"/></div>
                <div>
                <h4>Clothing</h4>
                <p>Mens</p>
                <p>Womens</p>
                <p>kids</p>
                <p>parties</p>
                </div>
                
            </div>
            <div className="ch1">
                <div><img className='img1'src="https://reactstorefronts.com/static/img/categories/shop/9.jpg"/></div>
                <div>
                <h4>Computers</h4>
                <p>Desktop</p>
                <p>Pc macbook</p>
                <p>Sd drives & MemoryCards</p>
                <p>Pc components</p>
                </div>
                
            </div>
            <div className="ch1">
                <div><img className='img1'src="https://reactstorefronts.com/static/img/categories/shop/2.jpg"/></div>
                <div>
                <h4>Home & Kitchen</h4>
                <p>Furniture</p>
                <p>Doors</p>
                <p>Windows</p>
                <p>Garden tools</p>
                </div>
                
            </div>
            <div className="ch1">
                <div><img className='img1'src="https://reactstorefronts.com/static/img/categories/shop/10.jpg"/></div>
                <div>
                <h4>Health and Beauty</h4>
                <p>Makeup</p>
                <p>Skin care</p>
                <p>Hair care</p>
                <p>Body care</p>
                </div>
                
            </div>
            <div className="ch1">
                <div><img className='img1'src="https://reactstorefronts.com/static/img/categories/shop/5.jpg"/></div>
                <div>
                <h4>Electronics</h4>
                <p>Tv televison</p>
                <p>Air conditioner</p>
                <p>Washing Machine</p>
                <p>Audio and Theaters</p>
                </div>
                
            </div>
        </div>
        <div className="banner">
            <img className="img2" src="https://reactstorefronts.com/static/img/promotions/home-4-1.jpg" />
        </div>
        </div>
    )
}
export default Refernce;