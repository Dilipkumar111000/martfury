import React from "react";
import "../styles/productcard3.scss"
import {AiFillStar} from 'react-icons/ai'


function ProductCard3({product}){
    return(
        <div >
            <div className="public">
            <div className="private">
         <img className='img'src={product.images.length && product.images[0].url}/>
         <p>Young Shop</p>
         <p className="title">{product.title}</p>
         <h3 className="price">{product.price}</h3>
         <p className="stars"><AiFillStar/><AiFillStar/><AiFillStar/></p>
         </div>
         </div>
        </div>
    )
}
export default ProductCard3;