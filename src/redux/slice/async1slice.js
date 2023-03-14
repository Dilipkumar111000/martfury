import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const homepageSlice = createSlice({
    name:"homepage",
    initialState: {
        items: [],
        status: "pending",
        error: "null"
    },
    reducers: {},
    extraReducers: builder => builder.addCase(fetchHomepageData.pending,(state,action)=>{
        state.status = "pending";
    })
    .addCase(fetchHomepageData.rejected,(state,action)=> {
        state.status = "rejected";
        state.error = action.payload;
    })
    .addCase(fetchHomepageData.fulfilled,(state,action)=>{
        state.status = "fullfilled";
        state.items = action.payload
        
    })
})
 export const fetchHomepageData = createAsyncThunk("Home/fetch",async()=>{
    try{
        const{data} = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789994/React%20Class/Parusuram/computer_uvq7ed.json");
        console.log(data);
        return data;
    
    }catch (error){
        console.log(error);
        return error.message;
    }
})
export default homepageSlice;