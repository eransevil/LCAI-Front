import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// הגדרה של axios לשלוח את ה-cookies אוטומטית עם כל קריאה
axios.defaults.withCredentials = true;
const apiUrl = process.env.REACT_APP_API_URL || `${window.location.origin}/api`;

// פעולה אסינכרונית שתבצע את קריאת ה-API ל-signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/signup`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

// פעולה אסינכרונית שתבצע את קריאת ה-API ל-login
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // חשוב כדי לכלול את ה-cookie
      });

      return response.data.user; // מחזיר את המידע של המשתמש
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

// פעולה אסינכרונית שתבצע את קריאת ה-API ל-logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/auth/logout",
        {},
        {
          withCredentials: true, // חשוב כדי לכלול את ה-cookie
        }
      );

      return true; // מחזיר אישור ל-logout
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/api/auth/verifyToken`, {
        withCredentials: true, // שליחה אוטומטית של ה-cookie
      });

      return response.data.user; // מחזיר את המידע של המשתמש אם ה-token תקין
    } catch (error) {
      return rejectWithValue(error.message); // מחזיר את השגיאה אם קרתה
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // signup
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload;
      })
      // login
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
