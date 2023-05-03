import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useState,useEffect} from 'react';
const initialState = {
    user:null
}

export const getUser:any = createAsyncThunk('user/getUser', async (number, thunkAPI) => {
    const token = localStorage.getItem('token');
    let decoded:any = token?.split('.')[1];
    let decodedUser = JSON.parse(atob(decoded))
    let u = {
        user:{}
    };
      
    fetch(`http://localhost:3000/api/users/${decodedUser['id']}`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then((res) => res.json())
    .then((res) => {
        
    })
    .catch((error) => {
        thunkAPI.rejectWithValue(error.res.data)
    })
    return u
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
        
        // getUser: getUser,
        // fetchUser: () => {
        //     if (!!localStorage.getItem('token')) {
        //         const token = localStorage.getItem('token');
        //         let decoded:any = token?.split('.')[1];
        //         let decodedUser = JSON.parse(atob(decoded))
                
        //         fetch(`http://localhost:3000/api/users/${decodedUser['id']}`,{
        //           method: 'GET',
        //           headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization': `${token}`
        //           }
        //         })
        //         .then(res => res.json())
        //         .then((data) => {
        //             initialState.user = data
        //         })
        //     }
        // }
    },
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state,action) => {
            console.log(action)
            state.user = action.payload
        })
        // [getUser.fulfilled]: (state, action) => {
            
           
        //     state.user = action.payload
        // }
    },
    
})

export const {login,logout} = userSlice.actions;
export const selectUser = (state:any) => state.user.user;

export default userSlice.reducer;