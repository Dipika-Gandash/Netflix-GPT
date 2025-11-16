import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null
    },
    reducers: {
        addUser : (state, action) => {
            state.userInfo = action.payload;
            return state;
        },
        removeUser : (state) => {
            state.userInfo = null;
            return state;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;