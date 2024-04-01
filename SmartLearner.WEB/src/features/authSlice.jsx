import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../utils/httpHandler';
import toast from 'react-hot-toast';

const initialState = {
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
            })
    }
});

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ requestData, navigate }, { rejectWithValue }) => {
        try {
            const response = await http.post(`/api/auth/register`, requestData);
            const resultData = response.data;
            if (!resultData.success) {
                toast.error(resultData.msg || 'Something went wrong');
            } else {
                toast.success(resultData.msg || 'Registered Successfully');
                navigate('/thanks')
                return resultData;
            }
        }
        catch (error) {
            toast.error(' went wrong');
            return rejectWithValue(error.message);
        }
    }
)

export default authSlice.reducer;
