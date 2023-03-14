import React from "react";
import "../styles/product1.scss"
import {AiFillStar} from 'react-icons/ai'
import { useSelector,useDispatch } from "react-redux";
import { addToCart,removeFromCart } from "../redux/slice/cartslice";

function ProductCard({product}){
        const cart = useSelector(state => state.cart);
        console.log(cart)
        const dispatch = useDispatch();
    return(
        <div >
            <div className="main">
            <div className="mix">
         <img className='img'src={product.images.length && product.images[0].url } alt={product.title}/>
         <p>Young Shop</p>
         <p className="title">{product.title}</p>
         <h3 className="price">{product.sale_price}</h3>
         <p className="stars"><AiFillStar/><AiFillStar/><AiFillStar/></p>
         

                <button onClick={()=> dispatch(addToCart(product))}>Add</button>
                <button onClick={()=> dispatch(removeFromCart(product))}>remove</button>
         </div>
         </div>
        </div>
    )
}
export default ProductCard;