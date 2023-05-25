import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useState,useEffect} from 'react';
import { configureStore } from "@reduxjs/toolkit";
const initialState = {
    user:null
}

export const getUser:any = createAsyncThunk('user/getUser', async (number, thunkAPI) => {
    const token = localStorage.getItem('token');
    let decoded:any = token?.split('.')[1];
    let decodedUser = JSON.parse(atob(decoded))
   
    const fetchUser = await fetch(`http://localhost:3000/api/users/${decodedUser['id']}`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then((res) => res.json())
    .then(data => {
       return data
    })
    .catch((error) => {
        thunkAPI.rejectWithValue(error.message)
    })
    fetchUser();
})

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login: (state,action) => {
            state.user = action.payload 
        },
        logout: (state) => {
            state.user = null;
        },
    },
    
    // extraReducers: builder => {
    //     builder.addCase(getUser.fulfilled, (state,action) => {
    //         console.log(action)
    //         state.user = action.payload
    //     })
    //     // [getUser.fulfilled]: (state, action) => {
            
           
    //     //     state.user = action.payload
    //     // }
    // },
    
});

export const {login,logout} = userSlice.actions;
export const selectUser = (state:any) => state.user.user;

export default userSlice.reducer;