import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;
const apiUrl = process.env.REACT_APP_API_URL || `${window.location.origin}/api`;

// יצירת asyncThunk לשליחת אימייל
export const sendEmail = createAsyncThunk(
  "email/sendEmail",
  async ({ email, subject, message }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/api/email/send-email`, {
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        return response.data; // אם הבקשה הצליחה
      } else {
        return rejectWithValue("Failed to send email");
      }
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(
        "a temporary error has occurred please try again later"
      );
    }
  }
);

// יצירת slice
const emailSlice = createSlice({
  name: "email",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = emailSlice.actions;
export default emailSlice.reducer;
