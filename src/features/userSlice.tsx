import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const registerUser: any = createAsyncThunk(
  "user/registerUser",
  async (data: any, thunkAPI) => {
    try {
      const response = await fetch(
        "https://orthodoc-backend-88937012f308.herokuapp.com/api/users",
        {
          method: "POST",
          body: data,
        }
      );
      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      } else {
        const newUser = await response.json();
        return newUser;
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser: any = createAsyncThunk(
  "user/getUser",
  async (number, thunkAPI) => {
    const token = localStorage.getItem("token");
    let decoded: any = token?.split(".")[1];
    let decodedUser = JSON.parse(atob(decoded));
    try {
      const response = await fetch(
        `https://orthodoc-backend-88937012f308.herokuapp.com/api/users/${decodedUser["id"]}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      }
      const user = await response.json();
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const handleLogin: any = createAsyncThunk(
  "user/handleLogin",
  async (values, thunkAPI) => {
    try {
      const response = await fetch(
        `https://orthodoc-backend-88937012f308.herokuapp.com/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      } else {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        return data.user;
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser: any = createAsyncThunk(
  "user/updateUser",
  async (value, thunkAPI) => {
    const token = localStorage.getItem("token");
    let decoded: any = token?.split(".")[1];
    let user = JSON.parse(atob(decoded));
    try {
      const response = await fetch(
        `https://orthodoc-backend-88937012f308.herokuapp.com/api/users/${user.id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ user: value }),
        }
      );
      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      } else {
        const updatedUser = await response.json();
        return updatedUser;
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser: any = createAsyncThunk(
  "user/deleteUser",
  async (value, thunkAPI) => {
    if (!!localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      let decoded: any = token?.split(".")[1];
      let user = JSON.parse(atob(decoded));

      try{
        const response = await fetch(`https://orthodoc-backend-88937012f308.herokuapp.com/api/users/${user.id}`, {
          method:'DELETE',
          headers: {
            'Authorization': `${token}`
          },
        });
        if(!response.ok){
          const error = await response.json()
          return thunkAPI.rejectWithValue(error)
        }else{
          const result = await response.json()
          return result
        }
      }catch(error:any){
        return thunkAPI.rejectWithValue(error.message);
      }
      
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    update: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { login, logout, update } = userSlice.actions;
export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;
