import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    isAdmin: boolean;
}

const initialState: IAuthState = {
    isAdmin: true,
};

export const AdminSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        adminLogin(state) {
            state.isAdmin = true;
        },
        adminLogout(state) {
            state.isAdmin = false;
        },
    },
});

export const { adminLogin, adminLogout } = AdminSlice.actions;
export default AdminSlice.reducer;
