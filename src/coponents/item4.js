import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchHome3pageData } from "../redux/slice/asyncslice4";
import ProductCard4 from "./productcard4";
import "../styles/items.scss"

function Item4(){
    const data = useSelector(state => state.Homepage4.items);
    console.log(data);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchHome3pageData());
    },[])
    return(
        <div >       
            <div className="lion">
            {data.length && data.map(e=><ProductCard4 product={e}/>)}
            </div>
           
        </div>
    )
}
export default Item4;