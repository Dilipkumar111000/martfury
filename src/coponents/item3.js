import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchHome2pageData } from "../redux/slice/asyncslice3";
import ProductCard3 from "./productcard3";
import "../styles/items.scss"

function Item3(){
    const data = useSelector(state => state.Homepage3.items);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchHome2pageData());
    },[])
    return(
        <div >        
            <div className="leo">
            {data.length && data.map(e=><ProductCard3 product={e}/>)}
            </div>
           
        </div>
    )
}
export default Item3;