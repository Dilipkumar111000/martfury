import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchHome1pageData } from "../redux/slice/asyncslice2";
import ProductCard2 from "./productcard2";
import "../styles/items.scss"

function Item2(){
    const data = useSelector(state => state.Homepage2.items);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchHome1pageData());
    },[])
    return(
        <div >        
            <div className="myproducts">
            {data.length && data.map(e=><ProductCard2 product={e}/>)}
            </div>
           
        </div>
    )
}
export default Item2;