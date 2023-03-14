import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const Secondslice = createSlice({
    name:"homepage2",
    initialState: {
        items: [],
        status: "pending",
        error: "null"
    },
    reducers: {},
    extraReducers: builder => builder.addCase(fetchHome1pageData.pending,(state,action)=>{
        state.status = "pending";
    })
    .addCase(fetchHome1pageData.rejected,(state,action)=> {
        state.status = "rejected";
        state.error = action.payload;
    })
    .addCase(fetchHome1pageData.fulfilled,(state,action)=>{
        state.status = "fullfilled";
        state.items = action.payload
        
    })
})
 export const fetchHome1pageData = createAsyncThunk("Home1/fetch",async()=>{
    try{
        const{data} = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789994/React%20Class/Parusuram/garden_n3irjr.json");
        console.log(data);
        return data;
    
    }catch (error){
        console.log(error);
        return error.message;
    }
})
export default Secondslice;