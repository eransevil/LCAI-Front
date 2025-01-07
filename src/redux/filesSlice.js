// client/src/redux/filesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;
const apiUrl = process.env.REACT_APP_API_URL;

// AsyncThunk לקריאת רשימת הקבצים
export const fetchFiles = createAsyncThunk(
  "files/fetchFiles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/api/files/my-files`, {
        withCredentials: true, // שולח את ה-Cookie אוטומטית
      });
      return response.data;
    } catch (error) {
      console.log("error", error);

      return rejectWithValue("Failed to fetch files");
    }
  }
);

// פעולה אסינכרונית ל-upload קובץ
export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/api/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // מכיוון שה-JWT נמצא בקוקיז, אין צורך להוסיף אותו בהגדרת Authorization
        },
      });

      return response.data; // החזרת התגובה מהמשרת
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Upload failed");
    }
  }
);

// Slice
const filesSlice = createSlice({
  name: "files",
  initialState: {
    files: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.files = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.file = action.payload; // אפשר לשמור את המידע על הקובץ שהועלה
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default filesSlice.reducer;
