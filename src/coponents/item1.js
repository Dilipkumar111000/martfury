import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchHomepageData } from "../redux/slice/async1slice";
import ProductCard from "./productcard";
import "../styles/items.scss"

function Item1(){
    const data = useSelector(state => state.Homepage.items);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchHomepageData());
    },[])
    return(
        <div >
            <div className="title">
                <h3>Consumer Electronics</h3>
                <p>New Arrivals</p>
                <p>Best seller</p>
                <p>Most Popular</p>
                <p>view All</p>
            </div>
            <div className="allProducts">
            {data.length && data.map(e=><ProductCard product={e}/>)}
            </div>
           
        </div>
    )
}
export default Item1;