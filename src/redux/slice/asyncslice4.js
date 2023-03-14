import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const Fourthslice = createSlice({
    name:"homepage4",
    initialState: {
        items: [],
        status: "pending",
        error: "null"
    },
    reducers: {},
    extraReducers: builder => builder.addCase(fetchHome3pageData.pending,(state,action)=>{
        state.status = "pending";
    })
    .addCase(fetchHome3pageData.rejected,(state,action)=> {
        state.status = "rejected";
        state.error = action.payload;
    })
    .addCase(fetchHome3pageData.fulfilled,(state,action)=>{
        state.status = "fullfilled";
        state.items = action.payload
        
    })
})
 export const fetchHome3pageData = createAsyncThunk("Home3/fetch",async()=>{
    try{
        const{data} = await axios.get(" https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789994/React%20Class/Parusuram/consumerElectronics_thkp32.json");
        console.log(data);
        return data;
    
    }catch (error){
        console.log(error);
        return error.message;
    }
})
export default Fourthslice;