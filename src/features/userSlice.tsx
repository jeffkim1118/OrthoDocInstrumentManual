import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user:null
}

export const getUser:any = createAsyncThunk('user/getUser', async (number, thunkAPI) => {
    const token = localStorage.getItem('token');
    let decoded:any = token?.split('.')[1];
    let decodedUser = JSON.parse(atob(decoded));
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
})

export const handleLogin:any = createAsyncThunk('user/handleLogin', async (values, thunkAPI) => {
  try{
    const response = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(values)
    });
    if(!response.ok){
      const error = await response.json();
      return thunkAPI.rejectWithValue(error);
    }
    const data = await response.json();
    
    localStorage.setItem('token', data.token)
    return data.user
  } catch (error:any){
    return thunkAPI.rejectWithValue(error.message);
  }
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
        builder
        .addCase(getUser.fulfilled, (state,action) => {
            state.user = action.payload
        })
        .addCase(handleLogin.fulfilled, (state,action) => {
          state.user = action.payload
        })
    },
    
});

export const {login,logout} = userSlice.actions;
export const selectUser = (state:any) => state.user.user;

export default userSlice.reducer;