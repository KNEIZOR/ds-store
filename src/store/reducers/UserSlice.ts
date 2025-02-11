import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    users: []
}

const initialState: IAuthState = {
    users: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
});

export default userSlice.reducer