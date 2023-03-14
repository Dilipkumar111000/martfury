import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const Thirdslice = createSlice({
    name:"homepage3",
    initialState: {
        items: [],
        status: "pending",
        error: "null"
    },
    reducers: {},
    extraReducers: builder => builder.addCase(fetchHome2pageData.pending,(state,action)=>{
        state.status = "pending";
    })
    .addCase(fetchHome2pageData.rejected,(state,action)=> {
        state.status = "rejected";
        state.error = action.payload;
    })
    .addCase(fetchHome2pageData.fulfilled,(state,action)=>{
        state.status = "fullfilled";
        state.items = action.payload
        
    })
})
 export const fetchHome2pageData = createAsyncThunk("Home2/fetch",async()=>{
    try{
        const{data} = await axios.get(" https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789994/React%20Class/Parusuram/health_ljpqlf.json");
        console.log(data);
        return data;
    
    }catch (error){
        console.log(error);
        return error.message;
    }
})
export default Thirdslice;