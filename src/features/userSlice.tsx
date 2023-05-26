import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useState,useEffect} from 'react';
const initialState = {
    user:null
}

export const getUser:any = createAsyncThunk('user/getUser', async (number, thunkAPI) => {
    const token = localStorage.getItem('token');
    let decoded:any = token?.split('.')[1];
    let decodedUser = JSON.parse(atob(decoded))
    
    try {
        const response = await fetch(`http://localhost:3000/api/users/${decodedUser['id']}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
    
        if (!response.ok) {
          const error = await response.json();
          return thunkAPI.rejectWithValue(error);
        }
        const user = await response.json();
        return user;
      } catch (error:any) {
        return thunkAPI.rejectWithValue(error.message);
      }
//     fetch(`http://localhost:3000/api/users/${decodedUser['id']}`,{
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': `${token}`
//       }
//     })
//     .then((res) => res.json())
//     .then((res) => {
        
//     })
//     .catch((error) => {
//         thunkAPI.rejectWithValue(error.res.data)
//     })
  
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